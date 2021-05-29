import { Config, browser } from "protractor";
import * as reporter from "cucumber-html-reporter";
import { url } from "./helper/environment";
let argv = require("yargs").argv;
const baseUrl = argv.env && url[argv.env] ? url[argv.env] : url["qa"];

export let config: Config = {
  // The address of a running selenium server.
  //seleniumAddress: "http://localhost:4444/wd/hub",
  directConnect: true,
  framework: "custom",
  baseUrl: baseUrl,
  // path relative to the current config file
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  // Capabilities to be passed to the webdriver instanace.
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: [
        //"--headless", 
        //"--disable-gpu",
        "--window-size=800x600",
        "--no-sandbox",
        "--disable-dev-shm-usage",
        "--disable-blink-features",
        "--disableChecks",
        "--disable-blink-features=AutomationControlled",
      ],
    },
  },

  // specs: ["../*/*.feature"],
  specs: [
    "../*/header.feature",
   "../*/footer.feature",
    //"../*/signIn.feature",
    //"../*/donate.feature",
    //"../*/campaigns.feature",
   //"../*/fundraiser.feature",
   //Don't run this "../*/apitesting.feature"
  ],
  SELENIUM_PROMISE_MANAGER: false,

  cucumberOpts: {
    // ~@test - > tags will not execute
    tags: ["~@stop"],
    //,"~@N_test"],
    format: "json:./cucumberTestReport.json",
    require: [
      "./specs/*.js", // accepts a glob
    ],
  },
 
  onPrepare: async () => {
    console.log("onPrepare");
    await browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);
    browser.waitForAngularEnabled(false);
    await browser.get(baseUrl);
    await browser.sleep(10000);
  },
  onComplete: () => {
    console.log("onComplete");
    var options = {
      theme: "bootstrap",
      jsonFile: "./cucumberTestReport.json",
      output: "./cucumberReport.html",
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        Browser: "Chrome  54.0.2840.98",
        Platform: "Windows 10",
        Parallel: "Scenarios",
        Executed: "Remote",
      },
    };
    reporter.generate(options);
  },
};
