import { Given, Then } from "cucumber";
import { browser, element, By } from "protractor";
import { getEle } from "../helper/gcHelper";
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;
const assert = chai.assert;

Given("Open homepage URL", async () => {
  // await browser.get("https://gcadmin:tigerhill2020@qa.givecharity.org");
  // await browser.get("https://staging.givecharity.org/");
  await browser.sleep(1000);
});

Then("check logo present", async () => {
  //await expect(element(By.css(getEle("mainlogo"))).isDisplayed()).to.exist;
  await expect(element(By.css(getEle("mainlogo"))).isPresent()).to.exist;
});
Then("is all menus displayed?", async () => {
  
  //nav menus
  let navMenu = element.all(By.css("#theme-navbar .nav-item"));
  checkAssert(navMenu,6);

  //sign in menus
  let loginMenu = element.all(By.css(".login-box-top div"));
  checkAssert(loginMenu,2);
  
  //5 corousel there?
 let corousels = element.all(By.css(".banner-text h1"));
 checkAssert(corousels,5);

  //Total campaing details (#Request, #amount)
   let campaingsInfo = element.all(By.css("#projectFacts .item"));
   checkAssert(campaingsInfo,4);

  //Active, complete, categoirs menus
  let sectionCard = element.all(By.css(".sectiontitle h2"));
  checkAssert(sectionCard,3);


});

function checkAssert(ele, expected)
{
  ele.count().then (async(num)=>{
   // console.log("count-->"+num);
    await expect(num).to.eql(expected);
    //await assert.equal(num,expected);
    browser.sleep(2000);
   return true;
  })
}
