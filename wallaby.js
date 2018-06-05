module.exports = function () {
  return {
    files: [
      'arrays/**/**/*.js',
      '!arrays/**/*.spec.js',
      '!arrays/**/*.test.js',
      'linked-lists/**/*.js',
      '!linked-lists/**/*.spec.js',
    ],

    tests: [
      'arrays/**/*.spec.js',
      'arrays/**/*.test.js',
      'linked-lists/**/*.spec.js',  
    ],

    testFramework: 'jest',
    env: {
      type: 'node',
    },
  };
};