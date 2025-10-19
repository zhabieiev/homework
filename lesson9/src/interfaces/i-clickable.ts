import { IComponent } from './i-component';

export interface IClickable extends IComponent {
    click(): void;
}
