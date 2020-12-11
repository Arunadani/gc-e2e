import { Then, When } from "cucumber";
import { browser, element, By, ExpectedConditions } from "protractor";

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;

import staticLinks from "../helper/staticLinks.json";

Then("click on header links {string}", async (navLn) => {
  console.log("header--", navLn);

  if (navLn == "signIn") {
    await verifyStaticLink(".login-box-top a", staticLinks[navLn]);
    //browser.sleep(10000);
    await browser.sleep(2000);
  } else {
    await verifyStaticLink(".navbar-nav a", staticLinks[navLn]);
    //browser.sleep(10000);
    await browser.sleep(2000);
  }
});

Then("click on static links {string}", async (nav) => {
  console.log("menu is--", nav);

  await verifyStaticLink(".single-footer-widget .list a", staticLinks[nav]);
  //browser.sleep(20000);
  await browser.sleep(2000);
});

async function verifyStaticLink(parentEle, navObj) {
  await element(By.cssContainingText(parentEle, navObj.title)).click();
  browser.sleep(2000);

  /* this if for only "home" menu*/

  if (navObj.checkFor == "null") {
    await expect(element(By.css(navObj.checkEle)).isPresent()).to.eventually
      .true;
  } else {
    await expect(
      element(
        By.cssContainingText(navObj.checkEle, navObj.checkFor)
      ).isPresent()
    ).to.eventually.true;
  }
}
