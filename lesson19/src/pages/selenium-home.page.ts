import { SeleniumBasePage } from './base/selenium-base.page';
import { Page } from '@playwright/test';
import { BaseSearchComponent } from '../components/base/base-search.component';

export class SeleniumHomePage extends SeleniumBasePage {
    constructor(page: Page) {
        super(page, '');
    }

    get mainHeader() {
        return this.page.locator('h1');
    }

    get heading(): BaseSearchComponent {
        return new BaseSearchComponent(this.page);
    }
}
