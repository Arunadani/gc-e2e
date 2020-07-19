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
  console.log("socialmedialink--", navS);
  let mediaObj = staticLinks[navS];

  element(By.css(".social-list a " + mediaObj.title)).click();

  await browser.getAllWindowHandles().then(function (guids) {
    if (guids.length > 1) {
      browser
        .switchTo()
        .window(guids[1])
        .then(() => {
          browser.driver.getCurrentUrl().then(function (url) {
            url = url.toLowerCase();
            expect(url.includes("facebook")).be.true;
            expect(url.includes("givecharity")).be.true;
            browser.driver.close();
            browser.switchTo().window(guids[0]);
          });
        });
    }
  });
});

When("Check is footer present?", function () {
  expect(element(By.css(footer.allColumn)).isPresent()).to.eventually.true;
});

Then('Check "4" columns are present?', async () => {
  expect(await element.all(By.css(footer.eachColumn)).count()).to.equal(4);
});

Then("Check is copyright area present?", () => {
  expect(element.all(By.css(footer.copyRight)).isPresent()).to.eventually.true;
});
