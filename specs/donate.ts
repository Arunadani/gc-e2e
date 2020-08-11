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
import { table } from "console";
let donate = getEle("donate");
let card = getEle("card");
let toast = getEle("toast");

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;

When("Click on Active Campaign", async () => {
  await browser.sleep(2000);
  await element(By.css(donate.campaignActive)).click();
  await browser.sleep(10000);
});
Then("Click donate in campaign card", async () => {
  await browser.sleep(2000);
  let list_donate = element.all(
    By.cssContainingText("#active_campaign a", " Donate")
  );

  await list_donate.get(2).click();
  await browser.sleep(8000);
  console.log("donate click");
});
When("Click on currency", async () => {
  element.all(By.tagName("option")).then(function (options) {
    options[2].click();
  });
  await browser.sleep(1000);
});
Then("Enter the amount", async () => {
  element(By.xpath(donate.amount)).sendKeys("10");
  await browser.sleep(2000);
});
Then("Enter first name", async () => {
  element(By.xpath(donate.firstName)).sendKeys("John");
  await browser.sleep(2000);
});
Then("Enter email", async () => {
  element(By.xpath(donate.email)).sendKeys("abc@gmail.com");
  await browser.sleep(2000);
});
Then("Enter phone number", async () => {
  element.all(By.tagName("option")).then(async (options) => {
    options[10].click();
    await browser.sleep(2000);
    element(By.xpath(donate.mobileNum)).sendKeys("1234567841");
  });
  await browser.sleep(5000);
});
Then("Click on pay", async () => {
  await browser.sleep(2000);
  element(By.partialButtonText("Pay")).click();
  await browser.sleep(2000);
});
Then("check Payment section present?", async () => {
  expect(element(By.css(donate.payMode)).isDisplayed()).to.exist;
});

Then("Enter the card name", async () => {
  element(By.xpath(donate.cardName)).sendKeys(card.name);
  await browser.sleep(2000);
});
Then("Enter the card number", async () => {
  browser.switchTo().frame(element(By.tagName("iframe")).getWebElement());

  await element(By.name(donate.cardNum)).sendKeys("4242424242424242");
  await browser.sleep(2000);
  //monthYear
  fn_tab();
  await element(By.xpath("//input[@name='exp-date']")).sendKeys("0525");

  browser.sleep(2000);

  element(By.xpath("//input[@name='cvc']")).sendKeys("111");
  await browser.sleep(2000);

  element(By.name(donate.zip)).sendKeys("630501");
  await browser.sleep(2000);

  fn_homeFrame();
});

Then("Click donate on payement section", async () => {
  fn_donate();
});
function fn_homeFrame() {
  browser.switchTo().defaultContent();
  browser.sleep(5000);
}
function fn_donate() {
  element(By.cssContainingText(".forward", "Donate ")).click();
  browser.sleep(5000);
}
function fn_tab() {
  browser.actions().sendKeys(protractor.Key.TAB).perform();
}

Then("Enter the wrong card name {string}", async (string) => {
  let name = element(By.xpath(donate.cardName));

  name.sendKeys(string);
  await browser.sleep(2000);

  if (string != "test") {
    fn_toastError(".error");
  }
  /*path and error message*/
  await browser.sleep(2000);
  name.clear();
});

Then("Enter the card  {string} number", async (string) => {
  browser.switchTo().frame(element(By.tagName("iframe")).getWebElement());

  let cardNumber = element(By.name(donate.cardNum));
  cardNumber.sendKeys(string);
  await browser.sleep(2000);

  fn_donate();
  fn_homeFrame();

  /*path and error message*/
  await browser.sleep(2000);

  cardNumber.clear();
});

Then("Enter the wrong card number {string}", async (string) => {
  if (string != 0) {
    browser.switchTo().frame(element(By.tagName("iframe")).getWebElement());
    console.log("wrong card number");

    let cardNumber = element(By.name(donate.cardNum));
    cardNumber.sendKeys(string);
    await browser.sleep(2000);

    fn_tab();

    // await element(By.xpath("//input[@name='exp-date']")).sendKeys(string2);
    // browser.sleep(2000);

    fn_homeFrame();
    fn_donate();
    await browser.sleep(2000);
    fn_toastError(".toast-error");

    await browser.sleep(2000);

    cardNumber.clear();
  }
});

function fn_toastError(checkEle) {
  browser.sleep(5000);
  expect(element(By.css(checkEle)).isDisplayed()).to.eventually.true;
}
