import { BaseComponent } from './base-component';
import { ITypeable } from '../interfaces/i-typeable';

export class Input extends BaseComponent implements ITypeable {
    public render(): string {
        const res = `Rendering input: ${this.getName()} ${this.getLocator()}`;
        console.log(res);
        return res;
    }

    public async type(text: string): Promise<string> {
        const res1 = `Typing '${text}' into input ${this.getName()} with locator ${this.getLocator()}`;
        console.log(res1);
        await this.simulateDelay();
        const res2 = `Finished typing '${text}'`;
        console.log(res2);
        return res2;
    }

    public async interact(): Promise<string> {
        return await this.type('default text');
    }
}
