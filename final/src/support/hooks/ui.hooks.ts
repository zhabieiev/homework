import { Before, After, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, expect } from '@playwright/test';
import { PropertyLoader } from '../../support/utils/property-loader.ts';
import { CustomWorld } from '../worlds/world.ts';

setDefaultTimeout(30 * 1000);
expect.configure({ timeout: 15000 });

Before({ tags: '@ui' }, async function (this: CustomWorld) {
    PropertyLoader.loadEnvProperties(this.varController);

    this.browser = await chromium.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    this.context = await this.browser.newContext({
        viewport: { width: 1920, height: 1080 } 
    });

    this.page = await this.context.newPage();
    this.page.setDefaultTimeout(10000);
});

After({ tags: '@ui' }, async function (this: CustomWorld, scenario) {
    if (this.page && scenario.result?.status === Status.FAILED) {
        try {
            const screenshot = await this.page.screenshot({
                fullPage: true
            });
            this.attach(screenshot, 'image/png');
        } catch (error) {
            console.error('Не удалось сделать скриншот:', error);
        }
    }

    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
});