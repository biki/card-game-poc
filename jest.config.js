module.exports = {
    preset: './node_modules/vite-jest/index.js',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.jsx',
        '<rootDir>/src/**/*.{spec,test}.jsx',
    ],
    testEnvironment: 'jsdom',
}
