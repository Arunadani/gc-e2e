import { Then, When } from "cucumber";
import {
  browser,
  protractor,
  element,
  By,
  ExpectedConditions,
} from "protractor";

import staticLinks from "../helper/staticLinks.json";
import { getEle } from "../helper/gcHelper";

let footer = getEle("footer");
let EC = protractor.ExpectedConditions;

let chai = require("chai")
  .use(require("chai-as-promised"))
  .use(require("chai-dom"));
let expect = chai.expect;

/*Then("Click on {string} social media link", async (navS) => {
  var mediaObj
  console.log("menu is--", navS);
  await verifySocialMediaStaticLink(".social-list a ", staticLinks[navS]);
  browser.sleep(20000);
});*/

Then("Click on {string} social media link", async (navS) => {
  console.log("menu is--", navS);
  browser.sleep(5000);
  //element(By.css(".social-list a " + mediaObj.title)).click();
  verifySocialMediaStaticLink(".social-list a ", staticLinks[navS]);
});

async function verifySocialMediaStaticLink(parentEle, mediaObj) {
  /*click the url*/
  await element(By.css(parentEle + mediaObj.title)).click();
  browser.sleep(2000);

  /*verify its title*/
  expect(element(By.css(mediaObj.checkEle)).isDisplayed()).to.eventually.true;
  browser.driver.quit();
}

When("Check is footer present?", function () {
  expect(element(By.css(footer.allColumn)).isPresent()).to.eventually.true;
});

Then('Check "4" columns are present?', async () => {
  expect(await element.all(By.css(footer.eachColumn)).count()).to.equal(4);
});

Then("Check is copyright area present?", () => {
  expect(element.all(By.css(footer.copyRight)).isPresent()).to.eventually.true;
});
