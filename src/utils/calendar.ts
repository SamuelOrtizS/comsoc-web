export interface CalendarEventData {
  title: string;
  description?: string;
  location?: string;
  startDate: string; // YYYY-MM-DD
  endDate?: string;   // YYYY-MM-DD
  startTime?: string; // HH:MM
  endTime?: string;   // HH:MM
}

/**
 * Formats a Date object or YYYY-MM-DD + HH:MM into an ISO 8601 string for calendars (YYYYMMDDTHHmmss).
 */
function formatCalendarDateTime(dateStr: string, timeStr?: string): string {
  const cleanDate = dateStr.replace(/-/g, '');
  if (!timeStr) {
    return `${cleanDate}T090000`;
  }
  const cleanTime = timeStr.replace(/:/g, '').padEnd(6, '0').slice(0, 6);
  return `${cleanDate}T${cleanTime}`;
}

/**
 * Generates a direct link to create the event in Google Calendar.
 */
export function getGoogleCalendarUrl(event: CalendarEventData): string {
  const start = formatCalendarDateTime(event.startDate, event.startTime);
  const end = formatCalendarDateTime(event.endDate || event.startDate, event.endTime || event.startTime || '11:00');

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${start}/${end}`,
    details: event.description || '',
    location: event.location || '',
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generates a direct link to create the event in Outlook Web / Office 365.
 */
export function getOutlookCalendarUrl(event: CalendarEventData): string {
  const startIso = `${event.startDate}T${event.startTime || '09:00'}:00`;
  const endIso = `${event.endDate || event.startDate}T${event.endTime || event.startTime || '11:00'}:00`;

  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: event.title,
    body: event.description || '',
    location: event.location || '',
    startdt: startIso,
    enddt: endIso,
  });

  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

/**
 * Generates an .ics file content (iCalendar format) as a data URI string.
 */
export function getIcsDataUri(event: CalendarEventData): string {
  const start = formatCalendarDateTime(event.startDate, event.startTime);
  const end = formatCalendarDateTime(event.endDate || event.startDate, event.endTime || event.startTime || '11:00');
  const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const cleanText = (txt?: string) => (txt || '').replace(/\n/g, '\\n').replace(/,/g, '\\,');

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//IEEE ComSoc Univalle//Eventos//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@comsoc.univalle.edu.co`,
    `DTSTAMP:${now}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${cleanText(event.title)}`,
    `DESCRIPTION:${cleanText(event.description)}`,
    `LOCATION:${cleanText(event.location)}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  return `data:text/calendar;charset=utf8,${encodeURIComponent(icsLines.join('\r\n'))}`;
}
