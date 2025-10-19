import { BaseComponent } from '../components/base-component';

export abstract class Page {
    private components: BaseComponent[] = [];
    public addComponent(component: BaseComponent): void {
        this.components.push(component);
    }

    public renderPage(): void {
        console.log(`Rendering page: ${this.constructor.name}`);
        this.components.forEach(c => c.render());
    }

    public getComponents(): readonly BaseComponent[] {
        return this.components;
    }
}
