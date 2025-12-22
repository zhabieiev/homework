import * as path from 'path';

export class ClassController {
    private static readonly MODELS_PATH = '../../../api/generatedModels/models';

    public static async getClazz(className: string): Promise<any> {
        try {
            const module = await import(path.join(this.MODELS_PATH, 'index'));
            const clazz = module[className];
            
            if (!clazz) {
                throw new Error(`Class ${className} not found in models`);
            }
            return clazz;
        } catch (ex) {
            throw new Error(`\nClassNotFoundException: ${ex}`);
        }
    }
}