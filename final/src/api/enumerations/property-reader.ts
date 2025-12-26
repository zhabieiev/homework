import { StringConvertor } from '../utils/converters/string.convertor.ts';
import { VariablesController } from '../../support/utils/variables.controller.ts';

export abstract class PropertyReader {
    constructor(protected readonly _name: string) {}

    public name(): string {
        return this._name;
    }

    public read(variablesController: VariablesController = new VariablesController()): string {
        const formattedName = this._name.toLowerCase().replace(/_/g, '.');
        return StringConvertor.convertString(`\$\{${formattedName}\}`, variablesController);
    }
}