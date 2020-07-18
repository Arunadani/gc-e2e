import { Then } from "cucumber";
import { browser, element, By, ExpectedConditions } from "protractor";

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;
/*

function quikLinks(displayEle: string) {
    await browser.sleep(5000);
    browser.getWindowHandle().then(function (parentGUID) {
      browser.getAllWindowHandles().then(function (allGUID) {
        for (let guid of allGUID) {
          if (guid != parentGUID) {
            browser.sleep(2000);
            browser.switchTo().window(guid);
            browser.sleep(5000);
            expect(element(By.css(displayEle)).isDisplayed()).be.eventually.true;
            browser.sleep(2000);
            browser.driver.close();
            browser.switchTo().window(parentGUID);
            browser.sleep(3000);
            expect(element(By.css(".logo")).isDisplayed()).be.eventually.true;
            browser.sleep(1000);
            break;
          }
        }
      });
    });
  }*/
