import { Then } from "cucumber";
import { browser, element, By, ExpectedConditions } from "protractor";

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;

import staticLinks from "../helper/staticLinks.json";

Then("click on header links {string}", async (nav) => {
  console.log("menu is--", nav);

  await verifyStaticLink(".nav-link", staticLinks[nav]);
  browser.sleep(20000);
});

Then("click on footer links {string}", async (nav) => {
  console.log("menu is--", nav);

  await verifyStaticLink(".single-footer-widget .list a", staticLinks[nav]);
  browser.sleep(20000);
});
Then("Click on {string} social media link", async (navS) => {
  let array;
  console.log("menu is--", navS);
  await verifySocialMediaStaticLink(".social-list a ", staticLinks[navS]);
  browser.sleep(20000);
});
async function verifySocialMediaStaticLink(parentEle, mediaObj) {
  var EC = prot;
  await element(By.css(parentEle + mediaObj.title)).click();
  browser.sleep(2000);

  // Waits for the title to contain 'foo'.
  await browser.wait(
    ExpectedConditions.titleContains("GiveCharity - Home | Facebook"),
    12000
  );
  browser.sleep(5000);
  browser.navigate().back();
}

async function verifyStaticLink(parentEle, navObj) {
  await element(By.cssContainingText(parentEle, navObj.title)).click();
  browser.sleep(2000);

  if (navObj.checkFor) {
    await expect(
      element(
        By.cssContainingText(navObj.checkEle, navObj.checkFor)
      ).isPresent()
    ).to.eventually.true;
  } else {
    await expect(element(By.css(navObj.checkEle)).isPresent()).to.eventually
      .true;
  }
}
