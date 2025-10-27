import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['src/specs/vitest/**/*.spec.ts'],
        exclude: ['src/specs/mocha/**'],
        environment: 'node'
    }
});
