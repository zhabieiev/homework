import { BaseComponent } from './base/base.component';
import { Locator, Page } from '@playwright/test';

export class HeaderComponent extends BaseComponent {
    constructor(page: Page) {
        super(page, '#main_navbar');
    }

    get documentationLink(): Locator {
        return this.base.locator('a[href="/documentation"]');
    }

    get searchButton(): Locator {
        return this.base.locator('#docsearch-1 button.DocSearch-Button');
    }

    async openDocumentation(): Promise<void> {
        await this.documentationLink.click();
    }

    async search(): Promise<void> {
        await this.searchButton.click();
    }
}
