import { test, expect } from '@playwright/test';
import { SeleniumDocsPage } from '../src/pages/selenium-docs.page';
import { DocsWebDriverPage } from '../src/pages/docs/docs-webdriver.page';

test('Open WebDriver section from sidebar', async ({ page }) => {
    const docs = new SeleniumDocsPage(page);
    const webdriver = new DocsWebDriverPage(page);

    await docs.goto();
    await docs.sidebar.openSection('m-documentationwebdriver');

    await expect(webdriver.heading).toHaveText('WebDriver');
});
