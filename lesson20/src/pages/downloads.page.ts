import { Page, Locator } from 'playwright';
import { BasePage } from './base/base.page.ts';

export class DownloadsPage extends BasePage {

    public get driversContainer(): Locator {
        return this.page.locator('.row.justify-content-center.px-5.pb-5');
    }

    public get browserImages(): Locator {
        return this.driversContainer.locator('img[src^="/images/programming/"]');
    }

    public constructor(page: Page, url = '/downloads') {
        super(page, url);
    }

    public async getBrowserImagesCount(): Promise<number> {
        await this.driversContainer.waitFor({ state: 'attached' });
        return this.browserImages.count();
    }
}
