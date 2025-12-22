import { expect, Locator } from '@playwright/test';
import { BasePage } from './base.page.ts';

export class SearchResultsPage extends BasePage {
    private readonly SEARCH_PAGE_CONTAINER = '[data-a="page-search"]';
    private readonly TOTAL_COUNT_SELECTOR = '.MuiTypography-root:has-text("Results")';
    private readonly RESULT_TITLES_SELECTOR = '[data-a="video-title"]';

    public readonly totalCount: Locator = this.page
        .locator(this.SEARCH_PAGE_CONTAINER)
        .locator(this.TOTAL_COUNT_SELECTOR);
    public readonly resultTitles: Locator = this.page.locator(this.RESULT_TITLES_SELECTOR);

    async verifyTotalCount(expectedCount: string) {
        await expect(this.totalCount).toHaveText(`${expectedCount} Results`);
    }

    async verifyResultsContainText(keyword: string) {
        await expect(this.resultTitles).toContainText([keyword], { ignoreCase: true });
    }
}