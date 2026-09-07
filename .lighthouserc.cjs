module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:4321'],
      numberOfRuns: 3,
      puppeteerOptions: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
    },
    assert: {
      assert: [
        // Performance score mínimo 90
        {
          pass: 'performance',
          comparison: { minScore: 0.90 },
          critical: true,
        },
        // Accessibility mínimo 90
        {
          pass: 'accessibility',
          comparison: { minScore: 0.90 },
          critical: true,
        },
        // Best Practices mínimo 95
        {
          pass: 'best-practices',
          comparison: { minScore: 0.95 },
          critical: true,
        },
        // SEO mínimo 95
        { pass: 'seo', comparison: { minScore: 0.95 }, critical: true },
        // LCP ≤ 2.5s
        {
          pass: 'largest-contentful-paint',
          comparison: { max: 2500 },
          critical: true,
        },
        // CLS ≤ 0.1
        {
          pass: 'cumulative-layout-shift',
          comparison: { max: 0.1 },
          critical: true,
        },
        // INP ≤ 200ms
        {
          pass: 'interactive',
          comparison: { max: 200 },
          critical: true,
        },
      ],
    },
    upload: {
      target: 'filesystem',
    },
  },
};
