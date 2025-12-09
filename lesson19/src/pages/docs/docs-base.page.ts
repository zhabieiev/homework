// src/pages/docs/docs-base.page.ts
import { Page, Locator } from '@playwright/test';
import { BaseSearchComponent } from '../../components/base/base-search.component';

export class DocsBasePage extends BaseSearchComponent {
    constructor(page: Page) {
        super(page);
    }

    public get heading(): Locator {
        return this.base.locator('h1, h2');
    }
}
