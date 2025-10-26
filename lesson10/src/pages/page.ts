import { IComponent } from '../interfaces/i-component';

export abstract class Page {
    protected components: IComponent[] = [];

    public getComponents(): IComponent[] {
        return this.components;
    }

    public addComponent(component: IComponent): number {
        this.components.push(component);
        return this.components.length;
    }

    public renderPage(): string[] {
        console.log(`Rendering page: ${this.constructor.name}`);
        return this.components.map((component) => component.render());
    }

    public async interactWithAll(): Promise<string[]> {
        const results: string[] = [];
        for (const component of this.components) {
            const r = await component.interact();
            results.push(r);
        }
        return results;
    }

    public abstract loadPage(): Promise<void>;
}
