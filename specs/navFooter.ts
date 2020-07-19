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
import { SSL_OP_EPHEMERAL_RSA } from "constants";
import { getUnpackedSettings } from "http2";

let footer = getEle("footer");

let chai = require("chai")
  .use(require("chai-as-promised"))
  .use(require("chai-dom"));
let expect = chai.expect;

async function verifyPop(guids, nav) {
  await browser.getAllWindowHandles().then(function (guids) {
    if (guids.length > 1) {
      browser
        .switchTo()
        .window(guids[1])
        .then(() => {
          browser.driver.getCurrentUrl().then(function (url) {
            url = url.toLowerCase();
            expect(url.includes(nav)).be.true;
            // expect(url.includes("givecharity")).be.true;
            browser.sleep(2000);
            browser.driver.close().then(function () {
              browser.sleep(2000);
              console.log("going to home window");
              browser.switchTo().window(guids[0]);
            });
          });
        });
    }
  });
  await browser.sleep(2000);
}

Then("Click on {string} social media link", async (socialNav) => {
  console.log("socialmedialink--", socialNav);

  await browser.sleep(3000);
  element(By.css(".social-list a .fa-" + socialNav)).click();

  await browser.getAllWindowHandles().then(function (guids) {
    if (guids.length > 1) {
      browser
        .switchTo()
        .window(guids[1])
        .then(() => {
          browser.driver.getCurrentUrl().then(function (url) {
            url = url.toLowerCase();
            expect(url.includes(socialNav)).be.true;
            // expect(url.includes("givecharity")).be.true;
            browser.sleep(2000);
            browser.driver.close().then(function () {
              browser.sleep(2000);
              console.log("going to home window");
              browser.switchTo().window(guids[0]);
            });
          });
        });
    }
  });
  await browser.sleep(2000);
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
