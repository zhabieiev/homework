import { IComponent } from './i-component';

export interface ITypeable extends IComponent {
    type(text: string): void;
}
