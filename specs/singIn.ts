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
//data-icon="sign-out-alt"

Given("Click on logout", async () => {
  element(By.xpath("//*[@data-icon='sign-out-alt']")).click();
  await browser.sleep(4000);
});

Given("Clear username & password", async () => {
  password.clear();
  email.clear();
});

Then("Click login button", async () => {
  await browser.sleep(2000);
  /*Enter Login*/
  await element(By.xpath("//button[@name='login']")).click();
  await browser.sleep(5000);

  //browser.wait(ExpectedConditions.elementToBeClickable($(login.userIcon)),5000);
  //expect(element(By.css(login.userIcon)).isPresent()).to.exist;
  expect(
    element(By.cssContainingText(".row h3", " User Dasboard")).isDisplayed()
  ).to.exist;
});

When("Click on Sign In menu", async () => {
  /*Click on signin*/
  await element(By.cssContainingText(getEle("loginEle"), "Sign In")).click();
  await browser.sleep(2000);

  /*Check page loaded*/
  expect(
    element(
      By.cssContainingText(login.userCheckEle, login.userCheckFor)
    ).isPresent()
  ).to.eventually.true;
});
Then("Enter correct email and password", async () => {
  /*enter username*/
  email.clear();
  email.sendKeys("anshcardinal@gmail.com");
  await browser.sleep(2000);
  /*enter password*/
  password.clear();
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
