import { Then, When, Given } from "cucumber";
import {
  browser,
  element,
  By,
  ElementFinder,
  ExpectedConditions,
} from "protractor";
import { getEle } from "../helper/gcHelper";
let donate = getEle("donate");

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;

When("Click on Active Campaign", async () => {
  await browser.sleep(4000);
  element(By.css(donate.campaignActive)).click();
  await browser.sleep(2000);
});
Then("Click on donate", async () => {
  let list_donate = element.all(
    By.cssContainingText("#active_campaign a", " Donate")
  );

  list_donate.get(1).click();
  await browser.sleep(5000);
});
When("Click on currency", async () => {
  // element(By.xpath(donate.currency)).then(function(){
  //     element.executeScript()
  element.all(By.tagName("option")).then(function (options) {
    options[2].click();
  });
  await browser.sleep(2000);
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
