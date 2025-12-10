import { Locator, Page } from '@playwright/test';

export class BaseComponent {
    protected readonly page: Page;
    protected readonly base: Locator;

    constructor(page: Page, locator: Locator | string) {
        this.page = page;
        this.base = typeof locator === 'string'
            ? page.locator(locator)
            : locator;
    }

    async waitVisible(): Promise<void> {
        await this.base.waitFor({ state: 'visible' });
    }
}
