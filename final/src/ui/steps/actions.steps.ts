import { Given, When } from '@cucumber/cucumber';
import { CustomWorld } from '../../support/worlds/world.ts';

Given('ui user opens {string} page', async function (this: CustomWorld, url: string) {
    await this.mainPage.navigate(url);
});

When('ui user searches for {string} on main page', async function (this: CustomWorld, query: string) {
    await this.mainPage.searchFor(query);
});

When('ui user clicks on video number {int} in {string} channel', async function (this: CustomWorld, videoIndex: number, channelName: string) {
    const channel = await this.mainPage.getChannelByName(channelName);
    await channel.clickVideoByIndex(videoIndex);
});

When('ui user deep searches for {string} on video page', async function (this: CustomWorld, query: string) {
    await this.videoPage.fillVideoSearch(query);
    await this.videoPage.openDeepSearch();
});

When('ui user opens {string} tab in Deep Search panel', async function (this: CustomWorld, tabName: string) {
    await this.videoPage.deepSearch.openTab(tabName);
});