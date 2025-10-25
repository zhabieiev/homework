import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/src/specs/jest/**/*.spec.ts'],
    testPathIgnorePatterns: ['/node_modules/', '<rootDir>/src/specs/mocha/'],
    moduleFileExtensions: ['ts', 'js'],
    roots: ['<rootDir>']
};
export default config;
