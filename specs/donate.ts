import { doesNotReject } from "assert";
import { Then, When } from "cucumber";

import { browser, element, By, protractor } from "protractor";
import { getEle } from "../helper/gcHelper";
let donate = getEle("donate");
let configData = getEle("config_data");
let toast = getEle("toast");

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;

Then("Click on a campaign card {string}", async (index) => {
  let list_donate = element.all(By.css("#active_campaign campaign-card>div"));
  await list_donate
    .get(index)
    .isPresent()
    .then((flag) => {
      expect(flag).to.be.true;
      list_donate.get(index).click();
    });
  await browser.sleep(3000);
  await element(By.cssContainingText(".row h3", " Campaign Details"))
    .isPresent()
    .then((flag) => {
      expect(flag).to.be.true;
    });
});

When("Select Currency as USD", async () => {
  let usd = await element(By.xpath(donate.currency));
  fn_isPresent(usd);

  await element.all(By.tagName("option")).then(function (options) {
    options[2].click();
  });
  await browser.sleep(3000);
});

Then("Enter the amount {string}", async (amountVal) => {
  let amount = await element(By.xpath(donate.amount));
  fn_isPresent(amount);
  await amount.sendKeys(amountVal);
  await browser.sleep(1000);
});
Then("Select transcation fee", async () => {
  let transferFee = await element(By.xpath(donate.transaction_fee));
  fn_isPresent(transferFee);
  await transferFee.click();
  await browser.sleep(1000);
});

Then("Enter first name {string}", async (firstName) => {
  let name = await element(By.xpath(donate.firstName));
  fn_isPresent(name);
  await name.sendKeys(firstName);
});

Then("Enter email", async () => {
  let email = await element(By.xpath(donate.email));
  fn_isPresent(email);
  await email.sendKeys(configData.email);
});

Then("Select country code", async () => {
  await element.all(By.tagName("option")).then(async (options) => {
    await options[10].click();
    await browser.sleep(1000);
  });
});

Then("Enter phone number", async () => {
  let mobileNum = await element(By.xpath(donate.mobileNum));
  fn_isPresent(mobileNum);
  await mobileNum.sendKeys(configData.phone);
});

Then("Is Anonymous field present?", async () => {
  let anonymous_donor = await element(By.id("anonymousDonor"));
  fn_isPresent(anonymous_donor);
  await anonymous_donor.click();
  await browser.sleep(1000);
});

Then("Click on Proceed to Pay", async () => {
  let pay = await element(By.partialButtonText(donate.pay_btn));
  fn_isPresent(pay);
  await pay.click();
  await browser.sleep(2000);
});

Then("Check Payment section is present?", async () => {
  await expect(element(By.css(donate.payMode)).isDisplayed()).to.exist;
});

Then("Enter the card name", async () => {
  let cardName = element(By.xpath(donate.cardName));
  fn_isPresent(cardName);
  await cardName.sendKeys(configData.name);
  await browser.sleep(2000);
});

Then("Enter the card Details", async () => {
  await browser.switchTo().frame(element(By.tagName("iframe")).getWebElement());

  var cardNumEle = await element(By.name(donate.cardNum));
  fn_isPresent(cardNumEle);
  await cardNumEle.sendKeys(configData.Num);
  await browser.sleep(2000);

  await element(By.xpath("//input[@name='exp-date']")).sendKeys("0525");
  await browser.sleep(2000);
  await element(By.xpath("//input[@name='cvc']")).sendKeys("111");
  await browser.sleep(2000);
  await element(By.name(donate.zip)).sendKeys("630501");
  await browser.sleep(2000);

  await browser.switchTo().defaultContent();
  await browser.sleep(5000);
});

Then("Click donate & Verify payment on {string}", async (toast) => {
  await browser.sleep(5000);
  let orgdonor = await element(By.partialButtonText("Donate"));
  fn_isPresent(orgdonor);
  await orgdonor.click();

  switch (toast) {
    case "success":
      await browser.sleep(30000);
      await expect(
        element(
          By.cssContainingText(".card-title", "PAYMENT DONE SUCCESSFULLY")
        ).isDisplayed()
      ).to.exist;
      await browser.sleep(10000);
      break;
      1;
    case "failure":
      await browser.sleep(5000);
      expect(
        element(
          By.cssContainingText(".toast-title", "PAYMENT FAILED")
        ).isPresent()
      ).to.exist;
      break;

    default:
      console.log("PAYMENT ERROR");
  }
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

async function fn_tab() {
  await browser.actions().sendKeys(protractor.Key.TAB).perform();
}
async function fn_isPresent(ele) {
  await ele.isPresent().then(async (flag) => {
    expect(flag).to.be.true;
  });
  await browser.sleep(3000);
}
