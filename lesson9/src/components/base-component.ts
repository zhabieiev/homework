import { IComponent } from '../interfaces/i-component';

export abstract class BaseComponent implements IComponent {
    private name: string;
    private locator: string;

    public constructor(name: string, locator: string) {
        this.name = name;
        this.locator = locator;
    }

    public render(): void {
        console.log(`Rendering ${this.name} using locator: ${this.locator}`);
    }

    public getName(): string {
        return this.name;
    }

    public getLocator(): string {
        return this.locator;
    }

    protected async simulateDelay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
