import { BeforeAll } from '@cucumber/cucumber';
import { SeleniumWorld } from '../worlds/selenium.world.ts';

export function globalContextHook(): void {
    BeforeAll(function() {
        SeleniumWorld.globalContext = new Map();
    });
}
