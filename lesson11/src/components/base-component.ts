import { IComponent } from '../interfaces/i-component';

export abstract class BaseComponent implements IComponent {
    public constructor(
        private readonly name: string,
        private readonly locator: string
    ) {}

    public getName(): string {
        return this.name;
    }

    public getLocator(): string {
        return this.locator;
    }

    protected async simulateDelay(): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve, 5));
    }

    public abstract render(): string;
    public abstract interact(): Promise<string>;
}
