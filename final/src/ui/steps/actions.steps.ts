import { Given, When } from '@cucumber/cucumber';
import { CustomWorld } from '../../support/worlds/world.ts';
import { MainPage } from '../pages/main.page.ts';
import { VideoPage } from '../pages/video.page.ts';

Given('ui user opens {string} page', async function (this: CustomWorld, url: string) {
    const mainPage = new MainPage(this.page, this.varController);
    await mainPage.navigate(url);
});

When('ui user searches for {string} on main page', async function (this: CustomWorld, query: string) {
    const mainPage = new MainPage(this.page, this.varController);
    await mainPage.searchFor(query);
});

When('ui user clicks on video number {int} in {string} channel', async function (this: CustomWorld, videoIndex: number, channelName: string) {
    const mainPage = new MainPage(this.page, this.varController);
    const channel = await mainPage.getChannelByName(channelName);
    await channel.clickVideoByIndex(videoIndex);
});

When('ui user deep searches for {string} on video page', async function (this: CustomWorld, query: string) {
    const videoPage = new VideoPage(this.page, this.varController);
    await videoPage.fillVideoSearch(query);
    await videoPage.openDeepSearch();
});

When('ui user opens {string} tab in Deep Search panel', async function (this: CustomWorld, tabName: string) {
    const videoPage = new VideoPage(this.page, this.varController);
    await videoPage.deepSearch.openTab(tabName);
});