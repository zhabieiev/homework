import { BaseComponent } from './base-component';
import { IClickable } from '../interfaces/i-clickable';

export class Checkbox extends BaseComponent implements IClickable {
    public async click(): Promise<void> {
        console.log(`Clicking checkbox ${this.getName()} with locator ${this.getLocator()}`);
        await this.simulateDelay(500);
        console.log(`Checkbox ${this.getName()} toggled`);
    }

    public render(): void {
        console.log(`Rendering checkbox: ${this.getName()} ${this.getLocator()}`);
    }
}
