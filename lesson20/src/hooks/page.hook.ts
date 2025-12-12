import { After, Before } from '@cucumber/cucumber';
import { SeleniumWorld } from '../worlds/selenium.world.ts';

export function pageHook(): void {
    Before(async function(this: SeleniumWorld) {
        this.page = await this.context.newPage();
    });

    After(async function(this: SeleniumWorld) {
        await this.page.close();
    });
}
