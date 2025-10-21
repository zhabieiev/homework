export interface IComponent {
    render(): void;
    interact(): Promise<void>;
}
