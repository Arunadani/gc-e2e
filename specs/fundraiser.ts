import { Then, When } from "cucumber";

import { browser, element, By, protractor } from "protractor";
var EC = protractor.ExpectedConditions;

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
});

When("Enter first name, middle name, last name", async () => {
  await element(By.name("name")).sendKeys("Moses");
});

When("Enter Email", async () => {
  await element(By.name("email")).sendKeys("abc@yahoo.com");
});

When("Choose Country & Phone Number", async () => {
  await element(By.css("#select2-mobileExtensionDonee-container")).click();
  await element.all(By.css(".select2-results__option")).then(async (id) => {
    id[5].click();
  });
  await element(By.name("phone")).sendKeys("1234567841");
});

When("Click on Sign Up", async () => {
  let signup = element(By.partialButtonText("Sign Up"));
  await browser.wait(EC.elementToBeClickable(signup), 5000);
  await signup.click();
});

Then("Check Verify OTP displayed", async () => {
  // let verifyOtp = element(By.partialButtonText("Verify OTP"));
  await expect(element(By.partialButtonText("Verify OTP")).isDisplayed()).to.be
    .true;
  //await browser.wait(EC.elementToBeClickable(verifyOtp), 5000);
  // verifyOtp.click();
  // await expect(verifyOtp.isDisplayed()).to.eventually.true;
});
