import propertiesReader from 'properties-reader';
import * as path from 'path';
import * as fs from 'fs';

export class PropertiesController {
    private static instance: PropertiesController;
    private readonly properties: Record<string, string> = {};
    private static readonly PATH_PROPERTIES = 'src/main/resources/properties';
    private static readonly ENV_KEY = 'env';

    private constructor() {
        const env = process.env[PropertiesController.ENV_KEY];
        if (env) {
            this.loadProperties(PropertiesController.PATH_PROPERTIES, `${env}.properties`);
        } else {
            throw new Error("The environment is not defined");
        }
    }

    public static getProperty(name: string): string {
        if (!this.instance) {
            this.instance = new PropertiesController();
        }

        const property = process.env[name] || this.instance.properties[name];
        if (property === undefined) {
            throw new Error(`Missing value for name ${name}!`);
        }
        return property;
    }

    private loadProperties(dir: string, name: string): void {
        const pathToFile = path.join(dir, name);
        if (!fs.existsSync(pathToFile)) {
            throw new Error(`Properties file '${pathToFile}' not found`);
        }

        const reader = propertiesReader(pathToFile);
        reader.each((key: string, value: unknown) => {
            const k = String(key);
            if (k.startsWith('+')) {
                this.loadProperties(dir, k.substring(1));
            } else {
                if (!(k in this.properties)) {
                    this.properties[k] = String(value);
                }
            }
        });
    }
}