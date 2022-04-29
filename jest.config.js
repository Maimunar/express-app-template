module.exports = {
  rootDir: '.', // This should point to the rootDir set in your tsconfig.json
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
    },
  },
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['./test/'],
}
