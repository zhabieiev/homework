import { IComponent } from '../interfaces/i-component';

export abstract class BaseComponent implements IComponent {
    public constructor(
        private readonly name: string,
        private readonly locator: string
    ) {}

    protected getName(): string {
        return this.name;
    }

    protected getLocator(): string {
        return this.locator;
    }

    protected async simulateDelay(): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve, 500));
    }

    public abstract render(): void;
    public abstract interact(): Promise<void>;
}

