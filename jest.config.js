module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  roots: ['<rootDir>/src'],
  testMatch: [
    ('**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'),
  ],
  transform: {
    '\\.tsx?$': 'ts-jest',
    '\\.svg?$': 'jest-svg-transformer',
  },
};
