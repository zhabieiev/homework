import { Page, expect } from '@playwright/test';

export class BasePage {
    protected readonly page: Page;
    protected readonly url: string;

    constructor(page: Page, url: string) {
        this.page = page;
        this.url = url;
    }

    async goto(): Promise<void> {
        await this.page.goto(this.url);
    }

    async verifyTitle(title: string): Promise<void> {
        await expect(this.page).toHaveTitle(title);
    }
}
