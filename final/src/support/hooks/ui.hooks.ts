import { Before, After, Status } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { CustomWorld } from '../worlds/world.ts';
import { PropertyLoader } from '../utils/property-loader.ts';

Before({ tags: '@ui' }, async function (this: CustomWorld) {
    PropertyLoader.loadEnvProperties(this.varController);

    const isCi = process.env.CI === 'true';

    this.browser = await chromium.launch({
        headless: isCi,
        args: isCi ? ['--no-sandbox', '--disable-setuid-sandbox'] : ['--start-maximized']
    });

    this.context = await this.browser.newContext({
        viewport: isCi ? { width: 1920, height: 1080 } : null
    });

    this.page = await this.context.newPage();
});

After({ tags: '@ui' }, async function (this: CustomWorld, scenario) {
    if (this.page && scenario.result?.status === Status.FAILED) {
        const screenshotDir = path.join(process.cwd(), 'reports', 'screenshots');
        
        if (!fs.existsSync(screenshotDir)) {
            fs.mkdirSync(screenshotDir, { recursive: true });
        }

        const safeFileName = scenario.pickle.name.replace(/[^a-z0-9]/gi, '_');
        const screenshotPath = path.join(screenshotDir, `${safeFileName}.png`);

        const screenshot = await this.page.screenshot({
            path: screenshotPath,
            fullPage: true
        });

        this.attach(screenshot, 'image/png');
    }

    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
});