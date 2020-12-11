import { Then, When, Given } from "cucumber";

import {
  browser,
  element,
  By,
  protractor,
  ElementFinder,
  ExpectedConditions,
} from "protractor";
import { getEle } from "../helper/gcHelper";
let fundraise = getEle("fundraise");

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;

When("Click on Fundraise", async () => {
  await element(By.cssContainingText(".nav-link", "Fundraise")).click();
  await browser.sleep(5000);

  expect(
    element(
      By.cssContainingText(".main_question", " Personal Info ")
    ).isPresent()
  ).to.eventually.true;

  await browser.sleep(2000);
});
When("Enter first name, middle name, last name", async () => {
  await element(By.name("name")).sendKeys("Moses");
  await browser.sleep(2000);
});
When("Enter SignupEmail", async () => {
  await element(By.name("email")).sendKeys("abc@yahoo.com");
  await browser.sleep(2000);
});

When("Choose country & Phonenumber", async () => {
  await element(By.id("select2-mobileExtensionDonee-container")).click();
  await browser.sleep(2000);

  await element.all(By.css(".select2-results__option")).then(async (id) => {
    id[5].click();
    await browser.sleep(2000);
  });
  await element(By.name("phone")).sendKeys("1234567841");
});
Then("Enter signUp", async () => {
  await element(By.buttonText("Sign Up")).click();
  expect(element(By.buttonText("Verify OTP")).isDisplayed());
});
