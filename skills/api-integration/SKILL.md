# SKILL: api-integration

## Description
Manages the integration of external APIs, environment variable configuration, and robust error handling for data-driven features (e.g., real-time currency conversion).

## When to use
- When adding features that require fetching data from an external service.
- When configuring new environment variables (e.g., API keys).
- When implementing caching or fallback mechanisms for third-party data.
- When troubleshooting issues related to API connectivity or data parsing.

## Workflow

### 1. Requirements & Security Analysis
- **Identify API Source**: Determine the endpoint, authentication method (API Key, Bearer Token, etc.), and rate limits.
- **Security Check**: **NEVER** hardcode API keys or sensitive credentials. Ensure they are accessed via `import.meta.env`.
- **Data Structure**: Analyze the expected JSON response to plan for TypeScript interfaces/types.

### 2. Implementation Pattern
- **Service Layer**: Create or update a utility file in `src/utils/` (e.g., `currency.ts`) to encapsulate the API logic.
- **Robust Fetching**:
    - Use `fetch` with proper error handling (`try/catch`).
    - Implement fallback values (e.g., a hardcoded exchange rate if the API fails).
- **Caching Strategy**: Implement a caching mechanism (e.g., local storage or a time-based variable) to minimize API calls and respect rate limits.
- **Typing**: Define strict TypeScript interfaces for the API response to ensure type safety throughout the application.

### 3. Integration & Verification
- **Environment Setup**: Verify that the required variable is present in the `.env` file (or mentioned as needed for the user to add).
- **Error Handling UI**: Ensure the UI gracefully handles loading states and error states (e.g., showing a fallback value instead of crashing).
- **Validation**:
    - [ ] API key is accessed via `import.meta.env`.
    - [ ] Fallback mechanism is implemented and tested.
    - [ ] TypeScript interfaces match the actual API response.
    - [ ] Error handling prevents application crashes on network failure.

## Quality Criteria
- [ ] **Security**: No secrets are committed to the codebase.
- [ ] **Resilience**: The app remains functional even if the API is down (fallback works).
- [ ] **Performance**: Caching prevents redundant network requests.
- [ ] **Type Safety**: No use of `any` for API responses.

## Example Prompt
"Implement a new utility to fetch real-time crypto prices for our store. Use an external API, ensure it's cached for 1 hour, and provide a fallback price if the fetch fails. Make sure to use environment variables for the API key."
