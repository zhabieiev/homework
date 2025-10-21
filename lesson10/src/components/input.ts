import { BaseComponent } from './base-component';
import { ITypeable } from '../interfaces/i-typeable';

export class Input extends BaseComponent implements ITypeable {
    public render(): void {
        console.log(`Rendering input: ${this.getName()} ${this.getLocator()}`);
    }

    public async type(text: string): Promise<void> {
        console.log(`Typing '${text}' into input ${this.getName()} with locator ${this.getLocator()}`);
        await this.simulateDelay();
        console.log(`Finished typing '${text}'`);
    }

    public async interact(): Promise<void> {
        await this.type('default text');
    }
}
