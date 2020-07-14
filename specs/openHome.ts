import { Given, When, Then } from "cucumber";
import { browser, element, By, $, $$, ExpectedConditions } from "protractor";
import { async } from "q";
browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false);

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;

Given("Open homepage URL", async () => {
  await browser.get("https://gcadmin:tigerhill2020@qa.givecharity.org");
  await browser.sleep(2000);
});

Then("check logo present", async () => {
  await expect(element(By.css(".logo.hide-xs .logo-default")).isDisplayed());
});
