import { Then, When } from "cucumber";

import { browser, element, By, protractor } from "protractor";
import { getEle } from "../helper/gcHelper";
let donate = getEle("donate");
let card = getEle("card");
let toast = getEle("toast");

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;

When("Click on Active Campaign", async () => {
  expect(element(By.id("ongoing_campaignId")).isPresent()).to.eventually.true;
  await element(By.css(donate.campaignActive)).click();
});

Then("Click on a campaign card {string}", async (index) => {
  await browser.sleep(2000);
  let list_donate = element.all(By.css("#active_campaign campaign-card>div"));
  await list_donate.get(index).click();
  expect(
    element(By.cssContainingText(".row h3", " Campaign Details")).isPresent()
  ).to.eventually.true;
});

When("Select Currency as USD", async () => {
  expect(element(By.xpath('//*[@formcontrolname="currency"]')).isPresent()).to
    .eventually.true;
  element.all(By.tagName("option")).then(function (options) {
    options[2].click();
  });
});

Then("Enter the amount", async () => {
  let amount = element(By.xpath(donate.amount));
  expect(amount.isPresent()).to.eventually.true;
  amount.sendKeys("10");
});

Then("Enter first name", async () => {
  let name = element(By.xpath(donate.firstName));
  expect(name.isPresent()).to.eventually.true;
  name.sendKeys("John");
});

Then("Enter email", async () => {
  let email = element(By.xpath(donate.email));
  expect(email.isPresent()).to.eventually.true;
  email.sendKeys("abc@gmail.com");
});

Then("Select country code", async () => {
  element.all(By.tagName("option")).then(async (options) => {
    options[10].click();
    await browser.sleep(2000);
  });
});

Then("Enter phone number", async () => {
  let mobileNum = element(By.xpath(donate.mobileNum));
  expect(mobileNum.isPresent()).to.eventually.true;
  mobileNum.sendKeys("1234567841");
});

Then("Click on Proceed to Pay", async () => {
  let pay = element(By.partialButtonText("Pay"));
  expect(pay.isPresent()).to.eventually.true;
  await browser.sleep(2000);
  pay.click();
  await browser.sleep(2000);
});

Then("Check Payment section is present?", async () => {
  expect(element(By.css(donate.payMode)).isDisplayed()).to.exist;
});

Then("Enter the card name", async () => {
  let cardName = element(By.xpath(donate.cardName));
  expect(cardName.isPresent()).to.eventually.true;
  cardName.sendKeys(card.name);
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

Then("Verify payment on {string}", async (toast) => {
  await browser.sleep(5000);
  fn_donate(toast);
});

Then("Enter the wrong card name {string}", async (string) => {
  let name = element(By.xpath(donate.cardName));
  name.clear();
  name.sendKeys(string);
  await browser.sleep(2000);
  if (string != "test") {
    fn_toastError(".error");
  }
  await browser.sleep(2000);
});

Then(
  "Enter the wrong card details and {string} and {string} and {string} and {string}",
  async (cardnum, expdate, cvc, zip) => {
    browser.switchTo().frame(element(By.tagName("iframe")).getWebElement());
    console.log("wrong card number");
    let cardNumber = element(By.name(donate.cardNum));
    cardNumber.clear();
    await browser.sleep(2000);
    cardNumber.sendKeys(cardnum);
    fn_tab();
    let date = element(By.xpath("//input[@name='exp-date']"));
    date.clear();
    await browser.sleep(2000);
    date.sendKeys(expdate);
    let cvv = element(By.xpath("//input[@name='cvc']"));
    cvv.clear();
    browser.sleep(2000);
    cvv.sendKeys(cvc);
    fn_homeFrame();
    await browser.sleep(2000);
    //fn_donate("failure");
    //await browser.sleep(2000);
    //fn_toastError("#toast-container .toast-error");
    //await browser.sleep(2000);
  }
);

function fn_toastError(checkEle) {
  browser.sleep(2000);
  expect(element(By.css(checkEle)).isDisplayed()).to.eventually.true;
}

function fn_homeFrame() {
  browser.switchTo().defaultContent();
  browser.sleep(5000);
}

async function fn_donate(type) {
  await browser.sleep(5000);
  let donate = element(By.css(".forward"));
  expect(donate.isPresent()).to.eventually.true;
  donate.click();
  browser.sleep(5000);
  if (type == "success") {
    await expect(element(By.css(".payment_success_msg card")).isDisplayed()).to
      .eventually.true;
  } else {
    await expect(element(By.css(".payment_success_msg card")).isDisplayed()).to
      .eventually.false;
  }
  await browser.sleep(10000);
}
function fn_tab() {
  browser.actions().sendKeys(protractor.Key.TAB).perform();
}
