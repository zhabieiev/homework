import { BaseComponent } from './base-component';
import { IClickable } from '../interfaces/i-clickable';

export class Button extends BaseComponent implements IClickable {
    public render(): string {
        const res = `Rendering button: ${this.getName()} ${this.getLocator()}`;
        console.log(res);
        return res;
    }

    public async click(): Promise<string> {
        const res1 = `Clicking button ${this.getName()} with locator ${this.getLocator()}`;
        console.log(res1);
        await this.simulateDelay();
        const res2 = `Button ${this.getName()} clicked!`;
        console.log(res2);
        return res2;
    }

    public async interact(): Promise<string> {
        return await this.click();
    }
}
