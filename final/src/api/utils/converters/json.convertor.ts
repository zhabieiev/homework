import { VariablesController } from '../controllers/variables.controller.ts';

export class JsonConvertor {
    private static readonly REGEX_INDEX = /\d+/;
    private static readonly REGEX_ARRAY_INDEX = /\[(\d+)\]/;
    private static readonly REGEX_VARIABLE = /\$\{(.+?)\}/;

    public static convertMapToJson(map: Record<string, string>, varController?: VariablesController): any {
        const obj: any = {};
        if (!map) return obj;

        Object.entries(map).forEach(([k, v]) => {
            if (v === undefined || v === null || v.trim() === '') {
                this.setPathValue(obj, k, null);
                return;
            }

            let value = this.resolveValue(v, varController);
            
            if (typeof value === 'string' && /^\[.*\]$/.test(value)) {
                try { value = JSON.parse(value); } catch { }
            }
            
            if (k.includes('.')) {
                this.convertNestedField(obj, k, value);
            } else {
                obj[k] = value;
            }
        });
        return obj;
    }

    private static resolveValue(v: string, varController?: VariablesController): any {
        if (!varController || typeof v !== 'string') return v;

        const match = this.REGEX_VARIABLE.exec(v);
        if (match) {
            const fullPlaceholder = match[0];
            const varName = match[1];
            const value = varController.getVar(varName);
            
            if (value === undefined) {
                throw new Error(`[JsonConvertor] Property '${varName}' was not found in any .properties file.`);
            }

            if (v === fullPlaceholder) return value;
            return v.replace(fullPlaceholder, String(value));
        }
        return v;
    }

    private static convertNestedField(origin: any, field: string, value: any): void {
        let copy = origin;
        const fields = field.split('.');
        for (let i = 0; i < fields.length - 1; i++) {
            const key = fields[i];
            copy = this.REGEX_ARRAY_INDEX.test(key) 
                ? this.populateArrayObject(copy, key) 
                : this.populateObject(copy, key);
        }
        copy[fields[fields.length - 1]] = value;
    }

    private static setPathValue(obj: any, path: string, value: any): void {
        if (!path.includes('.')) {
            obj[path] = value;
        } else {
            this.convertNestedField(obj, path, value);
        }
    }

    private static populateObject(origin: any, key: string): any {
        if (!origin[key] || typeof origin[key] !== 'object') origin[key] = {};
        return origin[key];
    }

    private static populateArrayObject(origin: any, arrayKey: string): any {
        const match = arrayKey.match(this.REGEX_INDEX);
        const index = match ? parseInt(match[0], 10) : 0;
        const key = arrayKey.replace(this.REGEX_ARRAY_INDEX, "");

        if (!origin[key] || !Array.isArray(origin[key])) origin[key] = [];
        while (origin[key].length <= index) origin[key].push({});
        if (!origin[key][index] || typeof origin[key][index] !== 'object') origin[key][index] = {};
        return origin[key][index];
    }
}