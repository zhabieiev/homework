import { BaseComponent } from './base-component';
import { IClickable } from '../interfaces/i-clickable';

export class Button extends BaseComponent implements IClickable {
    public async click(): Promise<void> {
        console.log(`Clicking button ${this.getName()} with locator ${this.getLocator()}`);
        await this.simulateDelay(500);
        console.log(`Button ${this.getName()} clicked!`);
    }

    public render(): void {
        console.log(`Rendering button: ${this.getName()} ${this.getLocator()}`);
    }
}
