import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './base.component';

export class BaseSearchComponent extends BaseComponent {
    constructor(page: Page) {
        super( page, 'div.DocSearch-Modal');
    }

    get searchInput(): Locator {
        return this.base.locator('//input');
    }

    get searchResult(): Locator {
        return this.base.locator('section.DocSearch-Hits');
    }

    public getSearchHit(text: string): Locator {
        return this.base
            .locator('li.DocSearch-Hit')
            .filter({ hasText: text })
            .locator('a')
            .first();
    }
}
