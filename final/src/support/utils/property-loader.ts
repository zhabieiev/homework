import fs from 'fs';
import path from 'path';
import { VariablesController } from '../../support/utils/variables.controller.ts';

export class PropertyLoader {
    private static cache: Map<string, string> = new Map();
    private static isLoaded = false;

    public static loadEnvProperties(varController: VariablesController) {
        if (!this.isLoaded) {
            const env = (process.env.ENV || 'qa').toLowerCase();
            const resourcesDir = path.join(process.cwd(), 'src', 'test', 'resources');
            const files = ['common.properties', `${env}.properties`].map(f => path.join(resourcesDir, f));

            files.forEach(filePath => {
                if (fs.existsSync(filePath)) {
                    const content = fs.readFileSync(filePath, 'utf-8');
                    this.parseToCache(content);
                }
            });
            this.isLoaded = true;
        }

        this.cache.forEach((value, key) => {
            varController.saveVar(key, value);
        });
    }

    private static parseToCache(content: string) {
        content.split(/\r?\n/).forEach(line => {
            const trimmedLine = line.trim();
            if (trimmedLine && !trimmedLine.startsWith('#') && !trimmedLine.startsWith('!')) {
                const firstEqualsIndex = trimmedLine.indexOf('=');
                if (firstEqualsIndex !== -1) {
                    const key = trimmedLine.substring(0, firstEqualsIndex).trim();
                    const value = trimmedLine.substring(firstEqualsIndex + 1).trim();
                    if (key) this.cache.set(key, value);
                }
            }
        });
    }
}