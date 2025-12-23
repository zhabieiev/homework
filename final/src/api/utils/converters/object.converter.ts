import _ from 'lodash';

export class ObjectConvertor {
    public static convertObjToActualMap(actualObj: any, expected: any): any {
        const actual = this.stringify(_.cloneDeep(actualObj));
        this.retain(actual, expected);
        return actual;
    }

    private static stringify(origin: any): any {
        if (origin === null || origin === undefined) return origin;
        if (Array.isArray(origin)) return origin.map(i => this.stringify(i));
        if (typeof origin === 'object') {
            return _.mapValues(origin, v => this.stringify(v));
        }
        return String(origin);
    }

    private static retain(actual: any, expected: any): void {
        if (_.isPlainObject(expected)) {
            if (actual && typeof actual === 'object') {
                Object.keys(actual).forEach(key => {
                    if (!(key in expected)) {
                        delete actual[key];
                    } else {
                        this.retain(actual[key], expected[key]);
                    }
                });
            }
        } else if (Array.isArray(expected) && Array.isArray(actual)) {
            expected.forEach((v, i) => this.retain(actual[i], v));
            if (actual.length > expected.length) actual.length = expected.length;
        }
    }
}