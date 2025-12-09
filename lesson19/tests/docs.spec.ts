import { test, expect } from '@playwright/test';
import { SeleniumHomePage } from '../src/pages/selenium-home.page';
import { SeleniumDocsPage } from '../src/pages/selenium-docs.page';

test('Navigate to documentation from header', async ({ page }) => {
    const home = new SeleniumHomePage(page);
    const docs = new SeleniumDocsPage(page);

    await home.goto();
    await home.header.openDocumentation();

    await expect(page).toHaveURL(/documentation/);
    await expect(docs.pageTitle).toBeVisible();
});

test('Search to GRID page', async ({ page }) => {
    const home = new SeleniumHomePage(page);

    await home.goto();
    await home.header.search();

    const searchInput = page.locator('#docsearch-input');
    await searchInput.fill('GRID');

    const gridResultLink = page.getByRole('link', { name: 'Grid' });
    await gridResultLink.first().click();

    await expect(page).toHaveURL(/grid/);

    const pageHeading = page.locator('h1');
    await expect(pageHeading).toHaveText(/Grid/);
});
