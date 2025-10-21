import { BaseComponent } from './base-component';
import { IClickable } from '../interfaces/i-clickable';

export class Button extends BaseComponent implements IClickable {
    public render(): void {
        console.log(`Rendering button: ${this.getName()} ${this.getLocator()}`);
    }

    public async click(): Promise<void> {
        console.log(`Clicking button ${this.getName()} with locator ${this.getLocator()}`);
        await this.simulateDelay();
        console.log(`Button ${this.getName()} clicked!`);
    }

    public async interact(): Promise<void> {
        await this.click();
    }
}
