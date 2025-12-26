import { Before, After, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, expect } from '@playwright/test';
import { PropertyLoader } from '../../support/utils/property-loader.ts';
import { CustomWorld } from '../worlds/world.ts';

setDefaultTimeout(30 * 1000);

expect.configure({ timeout: 15000 });

Before({ tags: '@ui' }, async function (this: CustomWorld) {
    PropertyLoader.loadEnvProperties(this.varController);

    this.browser = await chromium.launch({
        headless: false,
        slowMo: 500,
        args: ['--start-maximized']
    });

    this.context = await this.browser.newContext({
        viewport: null
    });

    this.page = await this.context.newPage();

    this.page.setDefaultTimeout(10000);
});

After({ tags: '@ui' }, async function (this: CustomWorld, scenario) {
    if (scenario.result?.status === Status.FAILED) {
        const screenshot = await this.page.screenshot({
            path: `./reports/screenshots/${scenario.pickle.name}.png`,
            fullPage: true
        });
        this.attach(screenshot, 'image/png');
    }

    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
});
