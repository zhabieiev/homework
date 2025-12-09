import { test, expect } from '../fixtures/custom-fixtures';

test('Verify WebDriver page has menu', async ({ seleniumHomePage, seleniumDocsPage }) => {
    await seleniumHomePage.header.openDocumentation();
    await seleniumDocsPage.sidebar.openSection('WebDriver');
    await seleniumDocsPage.sidebar.waitVisible();
});

test('Open WebDriver section from sidebar', async ({ seleniumHomePage, seleniumDocsPage }) => {
    await seleniumHomePage.header.openDocumentation();
    await seleniumDocsPage.sidebar.openSection('WebDriver');
    await expect(seleniumDocsPage.pageTitle).toHaveText('WebDriver');
});


