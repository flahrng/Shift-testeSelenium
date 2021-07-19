const { setHeadlessWhen, setWindowSize } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://automationpractice.com/',
      browser: 'chrome',
      windowSize: 'maximize',
      smartwait: 10000,
      waitForTimeout: 10000,
      restart: true
    },
    CmdHelper: {
      require: "./node_modules/codeceptjs-cmdhelper"
    }
  },
  include: {
    I: './steps_file.js',
    cartPage: './pages/cartPage.js',
    homePage: './pages/homePage.js',
    searchPage: './pages/searchPage.js',
    productPage: './pages/productPage.js',
    productUtils: './utils/productUtils.js',
    authUtils: './utils/authUtils.js',
    authenticationPage: './pages/authenticationPage.js',
    checkoutProcessPage: './pages/checkoutProcessPage.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    allure: {
      enabled: true
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'CodeceptJSTest'
}