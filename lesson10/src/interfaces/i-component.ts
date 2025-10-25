export interface IComponent {
    render(): string;
    interact(): Promise<string>;
}
