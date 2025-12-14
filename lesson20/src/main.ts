import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { SeleniumWorld } from './worlds/selenium.world.ts';

setDefaultTimeout(999999999);
setWorldConstructor(SeleniumWorld);
