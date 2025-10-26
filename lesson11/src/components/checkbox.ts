import { BaseComponent } from './base-component';
import { IClickable } from '../interfaces/i-clickable';

export class Checkbox extends BaseComponent implements IClickable {
    public render(): string {
        const res = `Rendering checkbox: ${this.getName()} ${this.getLocator()}`;
        console.log(res);
        return res;
    }

    public async click(): Promise<string> {
        const res = `Checkbox ${this.getName()} toggled ${this.getLocator()}`;
        console.log(res);
        await this.simulateDelay();
        return res;
    }

    public async interact(): Promise<string> {
        return await this.click();
    }
}
