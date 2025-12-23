import _ from 'lodash';

export class VariablesController {
    private variables: Map<string, any> = new Map();

    public saveVar(key: string, value: any): void {
        this.variables.set(key, value);
    }

    public setVar(key: string, value: any): void {
        this.saveVar(key, value);
    }

    public getVar(key: string): any {
        if (this.variables.has(key)) {
            return this.variables.get(key);
        }

        const allVars = Object.fromEntries(this.variables);
        const value = _.get(allVars, key);

        return value;
    }

    public getVarString(key: string): string {
        const value = this.getVar(key);
        return value !== null && value !== undefined ? String(value) : "";
    }

    public getAllVars(): Record<string, any> {
        return Object.fromEntries(this.variables);
    }
}