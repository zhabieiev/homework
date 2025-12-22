import { Then } from '@cucumber/cucumber';
import { expect, Locator } from '@playwright/test';
import { CustomWorld } from '../../support/worlds/world.ts';
import { SearchResultsPage } from '../pages/search-results.page.ts';
import { VideoPage } from '../pages/video.page.ts';
import { DataTable } from '@cucumber/cucumber';

Then('search results should contain videos related to {string}', async function (this: CustomWorld, expectedKeyword: string) {
    const resultsPage = new SearchResultsPage(this.page, this.varController);
    await resultsPage.verifyResultsContainText(expectedKeyword);
});

Then('video page should display title containing {string}', async function (this: CustomWorld, expectedTitle: string) {
    const videoPage = new VideoPage(this.page, this.varController);
    await videoPage.verifyVideoTitle(expectedTitle);
});

Then('search results count should be {string}', async function (this: CustomWorld, expectedCount: string) {
    const resultsPage = new SearchResultsPage(this.page, this.varController);
    await resultsPage.verifyTotalCount(expectedCount);
});

Then('the following timestamps should be displayed:', async function (this: CustomWorld, table: DataTable) {
    const videoPage = new VideoPage(this.page, this.varController);
    const expectedTimestamps = table.raw().flat().map(t => t.trim());
    const timestampLocator: Locator = videoPage.deepSearch.activeTimestamps;
    await expect(timestampLocator).toHaveCount(expectedTimestamps.length, { timeout: 15000 });
    const actualTimestamps = await timestampLocator.allInnerTexts();
    const normalizedActual = actualTimestamps.map(t => t.replace(/\s+/g, ' ').trim());
    expect(normalizedActual).toEqual(expectedTimestamps);
});