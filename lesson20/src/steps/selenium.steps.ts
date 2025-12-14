import { Given, Then, When } from '@cucumber/cucumber';
import { SeleniumWorld } from '../worlds/selenium.world.ts';
import { expect } from 'chai';

Given('user navigates to home page', async function(this: SeleniumWorld) {
    await this.seleniumBasePage.goto();
});

When('user navigates to {string} page via header', async function(this: SeleniumWorld, pageName: string) {
    await this.seleniumBasePage.header.openPage(pageName);
});

When('user navigates to {string} page via side menu', async function(this: SeleniumWorld, sectionName: string) {
    await this.seleniumBasePage.sideMenu.openSection(sectionName);
});

When('user reads the page title', async function(this: SeleniumWorld) {
    const title = await this.seleniumBasePage.title.textContent() as string;
    this.scenarioContext.set('title', title);
});

When('user searches for {string}', async function(this: SeleniumWorld, query: string) {
    await this.seleniumBasePage.header.search();
    await this.seleniumBasePage.searchMenu.searchInput.click();
    await this.seleniumBasePage.searchMenu.searchInput.fill(query);
    await this.seleniumBasePage.searchMenu.getSearchHit(query).click();
});

When('user reads the number of browser driver images', async function(this: SeleniumWorld) {
    const count = await this.downloadsPage.getBrowserImagesCount();
    this.scenarioContext.set('imageCount', count);
});

Then('the count should be equal to {int}', function(this: SeleniumWorld, expectedCount: number) {
    const actualCount = this.scenarioContext.get('imageCount') as number;
    expect(actualCount).to.equal(expectedCount);
});

Then('page title should be equal to {string}', async function(this: SeleniumWorld, expectedTitle: string) {
    const actualTitle = await this.scenarioContext.get('title') as string;
    expect(actualTitle).to.equal(expectedTitle);
});
