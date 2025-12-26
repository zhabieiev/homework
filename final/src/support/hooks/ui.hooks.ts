import { After, Status } from '@cucumber/cucumber';
import * as fs from 'fs';
import * as path from 'path';
import { CustomWorld } from '../worlds/world.ts';

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
        console.log(`Скриншот сохранен: ${screenshotPath}`);
    }

    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
});