import { Then, When } from "cucumber";
import { browser, element, By, ExpectedConditions } from "protractor";
import staticLinks from "../helper/staticLinks.json";

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;


Then("click on header links {string}", async (navLn) => {
  console.log("header--", navLn);

  if (navLn == "signIn") {
    await verifyStaticLink(".login-box-top a", staticLinks[navLn]); 
    await browser.sleep(2000);
  } else {
    await verifyStaticLink(".navbar-nav a", staticLinks[navLn]);
    await browser.sleep(2000);
  }
});

Then("click on static links {string}", async (nav) => {
  console.log("menu is--", nav);

  await verifyStaticLink(".single-footer-widget .list a", staticLinks[nav]);
  await browser.sleep(2000);
});

async function verifyStaticLink(parentEle, navObj) {
  await element(By.cssContainingText(parentEle, navObj.title)).click();
  await browser.sleep(10000);

  /* this if for only "home" menu*/

  if (navObj.checkFor == "null") {
    await expect(element(By.css(navObj.checkEle)).isPresent()).to.exist;
  } else {
    expect(
      await element(
        By.cssContainingText(navObj.checkEle, navObj.checkFor)
      ).isPresent()
    ).to.be.true;
  }
}
