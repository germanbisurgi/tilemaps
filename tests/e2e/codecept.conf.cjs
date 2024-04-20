exports.config = {
  tests: './**/*_test.cjs',
  output: './output',
  include: {
    I: './steps_file.cjs'
  },
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8081',
      show: false,
      waitForAction: 500,
      waitForTimeout: 10000,
      windowSize: '1200x600'
    }
  }
}
