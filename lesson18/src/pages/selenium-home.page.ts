import { SeleniumBasePage } from './base/selenium-base.page';
import { Page } from '@playwright/test';

export class SeleniumHomePage extends SeleniumBasePage {
    constructor(page: Page) {
        super(page, '');
    }

    get mainHeader() {
        return this.page.locator('h1');
    }
}
