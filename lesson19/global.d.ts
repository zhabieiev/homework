import { SeleniumHomePage } from './src/pages/selenium-home.page';
import { SeleniumDocsPage } from './src/pages/selenium-docs.page';
import { DocsWebDriverPage } from './src/pages/docs/docs-webdriver.page';

export {};

declare global {
    namespace PlaywrightTest {
        interface Fixtures {
            seleniumHomePage: SeleniumHomePage;
            seleniumDocsPage: SeleniumDocsPage;
            docsWebDriverPage: DocsWebDriverPage;
        }
    }
}
