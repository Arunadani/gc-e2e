import { Config } from "protractor";
import { browser } from "protractor";
import * as reporter from "cucumber-html-reporter";

export let config: Config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  framework: "custom",
  // path relative to the current config file
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  // Capabilities to be passed to the webdriver instanace.
  capabilities: {
    browserName: "chrome",
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ["../*/*.feature"],
  cucumberOpts: {
    // require step definitions
    tags: "@Initial",
    format: "json:./cucumberTestReport.json",
    require: [
      "./specs/*.js", // accepts a glob
    ],
  },
  onPrepare: () => {
    console.log("ONPREPARE");
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(1000);
    browser.ignoreSynchronization = true;
  },
  onComplete: () => {
    console.log("ONCOMPLETE");
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
