import { DateConverter } from './date.converter.ts';
import { PropertiesController } from '../controllers/properties.controller.ts';
import { VariablesController } from '../../../support/utils/variables.controller.ts';
import { FileUtils } from '../file-utils.ts';

export class StringConvertor {
    public static readonly EMPTY_VALUE = '""';
    public static readonly DATETIME = /(.*)date:\{([^}]+)\}(.*)/;
    public static readonly PROPERTY = /(.*)\$\{([^}]+)\}(.*)/;
    public static readonly VARIABLE = /(.*)@\{([^}]+)\}(.*)/;
    public static readonly FILE = /(.*)file:\{([^}]+)\}(.*)/;

    public static convertString(value: string, varController: VariablesController): string {
        if (!value) return value;
        let result = value;

        while (this.isMatch(result)) {
            if (result === this.EMPTY_VALUE) result = "";
            else if (this.PROPERTY.test(result)) result = this.replace(this.PROPERTY, result, v => PropertiesController.getProperty(v));
            else if (this.VARIABLE.test(result)) result = this.replace(this.VARIABLE, result, v => varController.getVarString(v));
            else if (this.DATETIME.test(result)) result = this.replace(this.DATETIME, result, v => DateConverter.convertByDateTimeVariables(v));
            else if (this.FILE.test(result)) result = this.replace(this.FILE, result, v => FileUtils.readFile(v));
        }
        return result;
    }

    private static isMatch(v: string): boolean {
        return v === this.EMPTY_VALUE || this.DATETIME.test(v) || this.PROPERTY.test(v) || this.VARIABLE.test(v) || this.FILE.test(v);
    }

    private static replace(regex: RegExp, input: string, fn: (v: string) => string): string {
        const m = input.match(regex);
        if (!m) return input;
        return `${m[1]}${fn(m[2])}${m[3]}`;
    }
}