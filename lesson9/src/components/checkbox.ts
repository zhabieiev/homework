import { BaseComponent } from './base-component';
import { IClickable } from '../interfaces/i-clickable';

export class Checkbox extends BaseComponent implements IClickable {
    public render(): void {
        console.log(`Rendering checkbox: ${this.getName()} ${this.getLocator()}`);
    }

    public async click(): Promise<void> {
        console.log(`Checkbox ${this.getName()} toggled ${this.getLocator()}`);
        await this.simulateDelay();
    }

    public async interact(): Promise<void> {
        await this.click();
    }
}
