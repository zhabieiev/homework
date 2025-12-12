import { After, Before } from '@cucumber/cucumber';
import { SeleniumWorld } from '../worlds/selenium.world.ts';
import * as fs from 'fs';
import { BrowserContextOptions } from 'playwright';

export function browserContextHook(): void {
    Before(async function(this: SeleniumWorld, { pickle }) {
        const featureName = pickle.uri.replace('.feature', '').replace(':', '-').replace('\\', '/');
        const scenarioName = pickle.name.split(':').join('').replace('/', '-').replace('\\', '-');
        const path = 'videos/' + featureName + '/' + scenarioName;

        const browserOptions: BrowserContextOptions = {
            recordVideo: { dir: path },
            timezoneId: 'Europe/Paris',
            viewport: { width: 1280, height: 1024 }
        };

        const workerId = process.env.CUCUMBER_WORKER_ID ? parseInt(process.env.CUCUMBER_WORKER_ID) : 0;
        if (fs.existsSync(`.auth/storage-state-${workerId}.json`)) {
            browserOptions.storageState = `.auth/storage-state-${workerId}.json`;
        }
        this.context = await SeleniumWorld.browser.newContext(browserOptions);
    });

    After(async function(this: SeleniumWorld) {
        await this.context.close();
    });
}
