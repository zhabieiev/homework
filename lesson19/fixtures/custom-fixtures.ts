import { test as base } from '@playwright/test';
import { SeleniumDocsPage } from '../src/pages/selenium-docs.page';
import { SeleniumHomePage } from '../src/pages/selenium-home.page';
import { DocsWebDriverPage } from '../src/pages/docs/docs-webdriver.page';

interface MyFixtures {
    seleniumHomePage: SeleniumHomePage;
    seleniumDocsPage: SeleniumDocsPage;
    docsWebDriverPage: DocsWebDriverPage;
}

export const test = base.extend<MyFixtures>({
    seleniumHomePage: async ({ page }, use) => {
        const home = new SeleniumHomePage(page);
        await home.goto();
        await use(home);
    },

    seleniumDocsPage: async ({ page }, use) => {
        await use(new SeleniumDocsPage(page));
    },

    docsWebDriverPage: async ({ page }, use) => {
        await use(new DocsWebDriverPage(page));
    }
});

export const expect = test.expect;
