import { Page } from '@playwright/test';
import { DocsBasePage } from './docs-base.page';

export class DocsWebDriverPage extends DocsBasePage {
    constructor(page: Page) {
        super(page, 'WebDriver');
    }

    get introBlock() {
        return this.page.locator('main p');
    }
}

