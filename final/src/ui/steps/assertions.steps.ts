import { Then } from '@cucumber/cucumber';
import { expect, Locator } from '@playwright/test';
import { CustomWorld } from '../../support/worlds/world.ts';
import { DataTable } from '@cucumber/cucumber';

Then('search results should contain videos related to {string}', async function (this: CustomWorld, expectedKeyword: string) {
    await this.searchResultsPage.verifyResultsContainText(expectedKeyword);
});

Then('video page should display title containing {string}', async function (this: CustomWorld, expectedTitle: string) {
    await this.videoPage.verifyVideoTitle(expectedTitle);
});

Then('search results count should be {string}', async function (this: CustomWorld, expectedCount: string) {
    await this.searchResultsPage.verifyTotalCount(expectedCount);
});

Then('the following timestamps should be displayed:', async function (this: CustomWorld, table: DataTable) {
    const expectedTimestamps = table.raw().flat().map(t => t.trim());
    const timestampLocator: Locator = this.videoPage.deepSearch.activeTimestamps;
    await expect(timestampLocator).toHaveCount(expectedTimestamps.length, { timeout: 15000 });
    const actualTimestamps = await timestampLocator.allInnerTexts();
    const normalizedActual = actualTimestamps.map(t => t.replace(/\s+/g, ' ').trim());
    expect(normalizedActual).toEqual(expectedTimestamps);
});