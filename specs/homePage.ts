import { Given, Then } from "cucumber";
import { browser, element, By } from "protractor";
import { getEle } from "../helper/gcHelper";
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;

Given("Open homepage URL", async () => {
  // await browser.get("https://gcadmin:tigerhill2020@qa.givecharity.org");
  // await browser.get("https://staging.givecharity.org/");
  await browser.sleep(1000);
});

Then("check logo present", async () => {
  //await expect(element(By.css(getEle("mainlogo"))).isDisplayed()).to.exist;
  await expect(element(By.css(getEle("mainlogo"))).isPresent());
});
