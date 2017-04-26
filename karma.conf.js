module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './client/common/.internal/*.js',
      './client/common/.internal/_test_/*.spec.js'
    ],
    preprocessors: {
      './client/common/.internal/*.js': ['babel'],
      './client/common/.internal/_test_/*.spec.js' : ['babel']
    },
    port: 9888,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}