import * as fs from 'fs';
import * as path from 'path';
import * as zlib from 'zlib';
import * as os from 'os';

export class FileUtils {
    private constructor() {}

    public static readFile(input: string): string {
        try {
            const filePath = path.resolve(input);
            return fs.readFileSync(filePath, 'utf-8');
        } catch (error) {
            throw new Error(`Failed to read file: ${input}. ${error}`);
        }
    }

    public static compressToGzip(input: string, target: string): void {
        try {
            const buffer = Buffer.from(input, 'utf-8');
            const compressed = zlib.gzipSync(buffer);
            fs.writeFileSync(path.resolve(target), compressed);
        } catch (error) {
            throw new Error(`Unable to get File: ${target}. ${error}`);
        }
    }

    public static createTempFile(filePath: string): string {
        try {
            const fileName = path.basename(filePath);
            const tempDir = os.tmpdir();
            const tempFilePath = path.join(tempDir, `${fileName}-${Date.now()}.tmp`);
            fs.writeFileSync(tempFilePath, '');
            return tempFilePath;
        } catch (error) {
            throw new Error(`Failed to create or write temp file. ${error}`);
        }
    }
}