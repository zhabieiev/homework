import { AfterAll, BeforeAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { SeleniumWorld } from '../worlds/selenium.world.ts';

export function browserHook():void {
    BeforeAll(async function() {
        SeleniumWorld.browser = await chromium.launch({ headless: false });
    });


    AfterAll(async function() {
        await SeleniumWorld.browser.close();
    });
}
