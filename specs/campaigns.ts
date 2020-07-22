import { Then, When } from "cucumber";
import { browser, element, By, ExpectedConditions } from "protractor";

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;

When("Click on Donate menu", async () => {
  await element(By.cssContainingText(".navbar-nav a", "Donate")).click();
  browser.sleep(2000);
  expect(
    await element(
      By.cssContainingText(".row h3", " Browse Campaigns")
    ).isPresent()
  ).to.be.true;
});

Then("Check Active & Completed Campaigns are present?", async () => {
  element(By.css("#ongoing_campaignId"))
    .isPresent()
    .then(function (present) {
      expect(present).to.be.true;
    });
  browser.sleep(2000);
  element(By.css("#completed_campaignId"))
    .isPresent()
    .then(function (present) {
      expect(present).to.be.true;
    });
});
Then("Check box section present?", async () => {
  element(By.css(".boxes label"))
    .getSize()
    .then(function (size) {
      expect(size).to.eql(6);
    });
});
Then("Check dropdown & search section present?", async () => {
  element(By.css(".searchFilter #cat option"))
    .getSize()
    .then(function (size) {
      expect(size).to.eql(4);
    });
  element(By.css("#table_filter"))
    .isPresent()
    .then(function (present) {
      expect(present).to.be.true;
    });
  element(By.css("#searchBtn"))
    .isPresent()
    .then(function (present) {
      expect(present).to.be.true;
    });
});
