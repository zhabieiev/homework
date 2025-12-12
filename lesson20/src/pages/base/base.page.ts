import { Page, Locator } from 'playwright';

export class BasePage {
    protected readonly page: Page;
    protected readonly url: string;

    public constructor(page: Page, url: string) {
        this.page = page;
        this.url = url;
    }

    public async goto(): Promise<void> {
        await this.page.goto(this.url);
    }

    public get title(): Locator {
        return this.page.locator('.td-main h1');
    }
}
