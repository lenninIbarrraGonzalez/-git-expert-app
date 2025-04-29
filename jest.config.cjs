module.exports = {
  testEnvironment: "jsdom",
  maxWorkers: "50%",
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};