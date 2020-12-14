import { Then, When, Given } from "cucumber";
import {
  browser,
  element,
  By,
  ElementFinder,
  ExpectedConditions,
} from "protractor";
import { getEle } from "../helper/gcHelper";
let login = getEle("login");

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;
let email = element(By.name(login.userEmail));
let password = element(By.css(login.userPassword));

function fn_clearEmailPass() {
  password.clear();
  email.clear();
}

Given("Click on logout", async () => {
  element(By.css(login.userProfile)).click();
  await browser.sleep(1000);
  element(By.xpath(login.userLogout)).click();
  await browser.sleep(2000);
});

Then("Click login button", async () => {
  /*Enter Login*/
  await element(By.xpath(login.userLogin)).click();
  await browser.sleep(5000);

  await expect(
    element(By.cssContainingText(".row h3", " User Dashboard")).isPresent()
  ).to.eventually.true;
});

When("Click on Sign In menu", async () => {
  /*Click on signin*/
  await element(By.cssContainingText(getEle("loginEle"), "Sign In")).click();
  await browser.sleep(2000);

  /*Check page loaded*/
 await expect(
    element(
      By.cssContainingText(login.userCheckEle, login.userCheckFor)
    ).isPresent()
  ).to.eventually.true;
  fn_clearEmailPass();
  await browser.sleep(2000);
});
Then("Enter correct email and password", async () => {
  /*enter username*/
  email.sendKeys("anshcardinal@gmail.com");
  await browser.sleep(3000);
  /*enter password*/
  password.sendKeys("Putrajay4");
  await browser.sleep(2000);
});

Then("Enter only password", async () => {
  /*enter password*/
  password.sendKeys("Putrajay4");
  await browser.sleep(2000);
});

Then("Enter wrong email", async () => {
  email.sendKeys("ee@yahoo");
});
Then("Enter only email", async () => {
  /*enter email*/
  email.sendKeys("anshcardinal@gmail.com");
  await browser.sleep(2000);
});
Then("Enter wrong password", async () => {
  password.sendKeys("11");
});
Then("Enter unregistered email", async () => {
  email.sendKeys("abc@gmail.com");
});
