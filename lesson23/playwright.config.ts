import { defineConfig, devices } from '@playwright/test';
import path from 'path';

const isCI = true; 
const outputDir = path.join(__dirname, 'playwright-report');

const chromiumLaunchOptions = {
    executablePath: '/usr/bin/chromium-browser',
};

export default defineConfig({
    testDir: './src/tests', 
    
    timeout: 60 * 1000, 
    expect: {
        timeout: 5000
    },

    // testIgnore: '**/src/**/*', 

    fullyParallel: false,
    forbidOnly: isCI,
    retries: isCI ? 2 : 0,
    workers: 1, 

    reporter: [
        ['html', { open: 'never', outputFolder: outputDir }],
        ['list']
    ],

    use: {
        baseURL: process.env.BASE_URL || 'http://localhost:3000',
        headless: true, 
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                launchOptions: chromiumLaunchOptions,
            },
        },
    ],
});