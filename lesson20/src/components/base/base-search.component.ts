import { Locator, Page } from 'playwright';
import { BaseComponent } from './base.component.ts';

export class BaseSearchComponent extends BaseComponent {
    public constructor(page: Page) {
        super( page, 'div.DocSearch-Modal');
    }

    public get searchInput(): Locator {
        return this.base.locator('input');
    }

    public get searchResult(): Locator {
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
