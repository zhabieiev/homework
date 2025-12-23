import { defineConfig, devices } from '@playwright/test';

const ENVS = {
    dev: 'http://ac-dev-trafficmanager-internal.dev-anyclip.com:8080/trafficmanager/api/',
    qa: 'http://ac-qa-trafficmanager-internal.qa-anyclip.com:8080/trafficmanager/api/'
} as const;

const env = (process.env.ENV || 'dev').toLowerCase() as keyof typeof ENVS;

export default defineConfig({
    testDir: './features',
    timeout: 30 * 1000,
    expect: { timeout: 5000 },
    fullyParallel: true,
    
    reporter: [['html', { open: 'never' }]],

    use: {
        baseURL: ENVS[env],
        browserName: 'chromium',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        }
    ]
});
