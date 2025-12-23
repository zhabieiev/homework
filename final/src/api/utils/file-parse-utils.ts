import 'reflect-metadata';
import { plainToInstance, ClassConstructor } from 'class-transformer';

export class FileParseUtils {

    public static read<T>(src: string | object, cls: ClassConstructor<T>): T {
        if (!src) {
            throw new Error("[FileParseUtils] Source data is null or undefined");
        }

        try {
            const plainObject = typeof src === 'string' ? JSON.parse(src) : src;

            return plainToInstance(cls, plainObject, {
                enableImplicitConversion: true,
                excludeExtraneousValues: false
            });
        } catch (error) {
            throw new Error(`[FileParseUtils] Failed to deserialize to ${cls.name}: ${error}`);
        }
    }
}

export const read = FileParseUtils.read;