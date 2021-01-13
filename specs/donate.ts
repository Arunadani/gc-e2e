import { doesNotReject } from "assert";
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

Then("Click on a campaign card {string}", async (index) => {
  //await browser.sleep(5000);
  let list_donate = element.all(By.css("#active_campaign campaign-card>div"));
  await list_donate.get(index).click();
  // console.log("Inside Debugggg");
  await browser.sleep(3000);
  await expect(
    element(By.cssContainingText(".row h3", " Campaign Details")).isPresent()
  ).to.eventually.true;
  // console.log("Debugggg");
});

When("Select Currency as USD", async () => {
  //await browser.sleep(10000);
  await expect(
    element(By.xpath('//*[@formcontrolname="currency"]')).isPresent()
  ).to.exist;
  element.all(By.tagName("option")).then(function (options) {
    options[2].click();
  });
  await browser.sleep(2000);
});

Then("Enter the amount {string}", async (amountVal) => {
  let amount = element(By.xpath(donate.amount));
  await expect(amount.isPresent()).to.eventually.true;
  await amount.sendKeys(amountVal);
});

Then("Enter first name {string}", async (firstName) => {
  let name = element(By.xpath(donate.firstName));
  await expect(name.isPresent()).to.eventually.true;
  await name.sendKeys(firstName);
});

Then("Enter email", async () => {
  let email = element(By.xpath(donate.email));
  await expect(email.isPresent()).to.eventually.true;
  await email.sendKeys("abc@gmail.com");
});

Then("Select country code", async () => {
  element.all(By.tagName("option")).then(async (options) => {
    options[10].click();
    browser.sleep(2000);
  });
});

Then("Enter phone number", async () => {
  let mobileNum = element(By.xpath(donate.mobileNum));
  await expect(mobileNum.isPresent()).to.eventually.true;
  await mobileNum.sendKeys("1234567841");
});

Then("Is Anonymous field present?", async () => {
  let anonymous_donor = element(By.id("anonymousDonor"));
  await expect(anonymous_donor.isPresent()).to.eventually.true;
  await anonymous_donor.click();
  await browser.sleep(5000);
});

Then("Click on Proceed to Pay", async () => {
  let pay = element(By.partialButtonText("Pay"));
  await expect(pay.isPresent()).to.eventually.true;
  await browser.sleep(2000);
  await pay.click();
  await browser.sleep(5000);
});

Then("Check Payment section is present?", async () => {
  await expect(element(By.css(donate.payMode)).isDisplayed()).to.exist;
});

Then("Enter the card name", async () => {
  let cardName = element(By.xpath(donate.cardName));
  await expect(cardName.isPresent()).to.eventually.true;
  await cardName.sendKeys(card.name);
  await browser.sleep(2000);
});

Then("Enter the card number", async () => {
  await browser.switchTo().frame(element(By.tagName("iframe")).getWebElement());
  await element(By.name(donate.cardNum)).sendKeys("4242424242424242");
  await browser.sleep(2000);
  //monthYear
  fn_tab();
  await element(By.xpath("//input[@name='exp-date']")).sendKeys("0525");
  await browser.sleep(2000);
  await element(By.xpath("//input[@name='cvc']")).sendKeys("111");
  await browser.sleep(2000);
  await element(By.name(donate.zip)).sendKeys("630501");
  await browser.sleep(2000);
  await browser.switchTo().defaultContent();
  //fn_homeFrame();
  await browser.sleep(5000);
});

Then("Click donate & Verify payment on {string}", async (toast) => {
  //fn_donate(toast);
  await browser.sleep(5000);
  let orgdonor = element(By.partialButtonText("Donate"));
  await orgdonor.click();
  await browser.sleep(30000);

  await expect(
    element(
      By.cssContainingText(".card-title", "PAYMENT DONE SUCCESSFULLY")
    ).isPresent()
  ).to.exist;
  await browser.sleep(10000);
});

Then("Enter the wrong card name {string}", async (string) => {
  let name = element(By.xpath(donate.cardName));
  name.clear();
  await name.sendKeys(string);
  await browser.sleep(2000);
  if (string != "test") {
    //fn_toastError(".error");
  }
  await browser.sleep(2000);
});

Then(
  "Enter the wrong card details and {string} and {string} and {string} and {string}",
  async (cardnum, expdate, cvc, zip) => {
    await browser
      .switchTo()
      .frame(element(By.tagName("iframe")).getWebElement());
    await browser.sleep(2000);
    console.log("wrong card number");
    let cardNumber = element(By.name(donate.cardNum));
    cardNumber.clear();
    await browser.sleep(2000);
    await cardNumber.sendKeys(cardnum);
    fn_tab();
    let date = element(By.xpath("//input[@name='exp-date']"));
    date.clear();
    await browser.sleep(2000);
    await date.sendKeys(expdate);
    let cvv = element(By.xpath("//input[@name='cvc']"));
    cvv.clear();
    await browser.sleep(2000);
    await cvv.sendKeys(cvc);
    fn_homeFrame();
    await browser.sleep(2000);
    //fn_donate("failure");
    //await browser.sleep(2000);
    //fn_toastError("#toast-container .toast-error");
    //await browser.sleep(2000);
  }
);

Then("is Donorlist field present?", async () => {
  let donors = element(By.css(".widget-title h2"));
  await expect(donors.isPresent()).to.eventually.true;
  await browser.sleep(2000);
});

Then("is donor {string} displayed correctly?", async (name) => {
  let donor_nameList = element.all(By.css(".donner-name span"));
  donor_nameList
    .get(0)
    .getText()
    .then(function (text) {
      console.log("donorname--->" + text);
      expect(text).to.contain(name);
    });
  await browser.sleep(5000);
});

async function fn_homeFrame() {
  await browser.switchTo().defaultContent();
}

function fn_tab() {
  browser.actions().sendKeys(protractor.Key.TAB).perform();
}
