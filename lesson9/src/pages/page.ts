import { IComponent } from '../interfaces/i-component';

export abstract class Page {
    protected components: IComponent[] = [];

    public addComponent(component: IComponent): void {
        this.components.push(component);
    }

    public renderPage(): void {
        console.log(`Rendering page: ${this.constructor.name}`);
        this.components.forEach((component) => component.render());
    }

    public async interactWithAll(): Promise<void> {
        for (const component of this.components) {
            await component.interact();
        }
    }

    public abstract loadPage(): Promise<void>;
}
