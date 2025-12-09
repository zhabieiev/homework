import { test, expect } from '../fixtures/custom-fixtures';

test('Open Documentation page', async ({ seleniumHomePage, seleniumDocsPage }) => {
    await seleniumHomePage.header.openDocumentation();
    await expect(seleniumDocsPage.pageTitle).toBeVisible();
});

test('Check search field exists', async ({ seleniumHomePage, seleniumDocsPage }) => {
    await seleniumHomePage.header.openDocumentation();
    await expect(seleniumDocsPage.header.searchButton).toBeVisible();
});

test('Check basic search functionality', async ({ seleniumHomePage, seleniumDocsPage }) => {
    await seleniumHomePage.header.openDocumentation();
    await seleniumHomePage.header.searchButton.click();
    await seleniumHomePage.heading.searchInput.click();
    await seleniumHomePage.heading.searchInput.fill('Grid');
    const exactMatchLink = seleniumHomePage.heading.getSearchHit('Grid');
    await exactMatchLink.click();
    await expect(seleniumDocsPage.pageTitle).toHaveText('Grid');
});
