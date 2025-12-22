import { Locator, Page } from '@playwright/test';

export abstract class BaseComponent {

    constructor(
        protected readonly root: Locator,
        protected readonly page: Page
    ) {}

    async isVisible(): Promise<boolean> {
        return await this.root.isVisible();
    }
}