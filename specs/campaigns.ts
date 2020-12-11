import { Then, When } from "cucumber";
import {
  browser,
  element,
  By,
  ElementFinder,
  ExpectedConditions,
} from "protractor";

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;

var longWait = 20000;
var shortWait = 10000;

When("Click on Donate menu", async () => {
  console.log("donate menu click");
  await element(By.cssContainingText(".navbar-nav a", "Donate")).click();
  browser.sleep(2000);
  expect(
    element(By.cssContainingText(".row h3", " Browse Campaigns")).isPresent()
  ).to.eventually.true;
  await browser.sleep(5000);
});

Then("Check Active & Completed Campaigns are present?", async () => {
  expect(element(By.css("#ongoing_campaignId")).isPresent()).to.eventually.true;
  browser.sleep(2000);
  expect(element(By.css("#completed_campaignId")).isPresent()).to.eventually
    .true;
  browser.sleep(2000);
});
Then("Check box section present?", async () => {
  // expect(element.all(By.css(".boxes .btn")).count()).to.deep.equal(6);
  /* element
    .all(By.css(".boxes .btn-light"))
    .count()
    .then(function (size) {
      browser.sleep(2000);
      console.log("box size-->", size);
      expect(size).to.equal(6);
    });*/
  browser.sleep(2000);
});

Then("Check dropdown & search section present?", async () => {
  browser.sleep(2000);
  /*Dropdown*/
  expect(element(By.css("#cat")).isPresent()).to.eventually.true;
  /*Text*/
  expect(element(By.css("#table_filter")).isPresent()).to.eventually.true;
  /*search*/
  expect(element(By.css("#searchBtn")).isPresent()).to.eventually.true;
});

When("Click on a campaign", async () => {
  /*blog present*/
  expect(element(By.css("#active_campaign .blog_card")).isPresent()).to
    .eventually.true;

  /*hover present*/
  expect(element(By.css(".card_img_hover")).isPresent()).to.eventually.true;

  /*By present*/
  expect(element(By.cssContainingText(".card_by", "by")).isPresent()).to
    .eventually.true;

  /*author present*/
  expect(element(By.css(".card_author")).isPresent()).to.eventually.true;

  /*social media */
  // element.all(By.css(".social-group a"))
  browser.sleep(2000);
});

Then("Verify all functionality in campaign card", async () => {
  fn_activeCampaign("#active_campaign "); //pass the ID manually
});

async function fn_activeCampaign(ID: string) {
  console.log("Active campaign inside-->" + ID);
  let blogCard = element(By.css(ID + ".card_img_hover_sec"));

  //let blogCard = element(By.css("#active_campaign .card_img_hover_sec"));
  let list_By = element.all(By.css(ID + ".blog_card .card_by"));
  let list_author = element.all(By.css(ID + ".card_author"));

  let list_readMore = element.all(By.css(ID + ".blog_card .btn-light"));
  let list_whatsapp = element.all(By.css(ID + ".blog_card .fa-whatsapp"));
  let list_facebook = element.all(By.css(ID + ".blog_card .fa-facebook"));

  let list_progressBar = element.all(By.css(ID + ".blog_card .progress-bar"));
  let list_goalAmount = element.all(By.css(ID + ".blog_card .ch_goal"));
  let list_percentage = element.all(By.css(ID + ".blog_card .percentes"));
  let list_raisedAmount = element.all(By.css(ID + ".blog_card .price-raised"));
  let list_remainingDays = element.all(
    By.css(ID + ".blog_card .remaining-days")
  );

  //let list_Card = element.all(By.css(ID + ".team-block"));
  let max = 0;

  //let list_donate = element.all(By.css(ID + ".blog_card .float-right"));
  //list_donate = element.all(By.css("#active_campaign .bottom-info .btn"));

  // await browser.sleep(7000);
  console.log("DEBUG");
  await element
    .all(By.css(ID + ".team-block"))
    .count()
    .then(function (n) {
      console.log("size--->", n);
      max = n;
      console.log("m--->", max);
      return true;
    });

  let index: number = fn_randomNum(max);
  console.log("random_num-->", index);
  console.log("Before function");
  let selEle = `${ID} campaign-card>div`;
  let list_title = await element.all(By.css(selEle)).get(index);

  console.log("element finder", selEle);
  await browser
    .actions()
    .mouseMove(list_title)
    .mouseMove(list_title)
    .click()
    .perform();
  //browser.actions.mouseMove(element).mouseMove(element).click().perform();

  //await element(By.css(ID)).all(By.css(".campaign-card")).get(1).click();
  await browser.sleep(20000);

  //list_title.get(2).click();
  /*  await browser
    .actions()
    .mouseMove(element(list_title.get(2)))
    .perform();

  //await browser.actions().mouseMove(list_title.get(2)).click().perform();
  await browser.sleep(20000);
  expect(list_title.get(2).isDisplayed()).to.eventually.true; */

  /* await expect(
    element(By.xpath("/*[@tittle='Campaign Details']")).isDisplayed()
  ).to.eventually.true;*/

  await expect(
    element(By.cssContainingText(".row h3", " Campaign Details")).isDisplayed()
  );
  console.log("END");
  await browser.sleep(20000);

  //fn_donate(list_donate, index);

  //fn_readMore(list_readMore, index);
  //browser.sleep(longWait);

  /*fn_socialMedia(list_facebook, index, "facebook");
  browser.sleep(2000);
  fn_socialMedia(list_whatsapp, index, "whatsapp");
  browser.sleep(2000);
  fn_socialMedia(list_facebook, index, "facebook");
  browser.sleep(2000);
  console.log("<-----end---->");
  browser.sleep(2000);*/
}
async function fn_socialMedia(mediaEle, index, checkFor) {
  console.log("social media-->", checkFor);
  await mediaEle.get(index).click();
  await browser.sleep(10000);

  await browser.getAllWindowHandles().then(function (guids) {
    if (guids.length > 0) {
      console.log("Length of guid-->", guids.length);
      browser
        .switchTo()
        .window(guids[1])
        .then(() => {
          browser.driver.getCurrentUrl().then(function (url) {
            url = url.toLowerCase();
            expect(url.includes(checkFor)).to.exist;
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

async function fn_readMore(readMoreEle, index) {
  console.log("readmore-->");
  expect(readMoreEle.get(index).isPresent()).to.eventually.true;
  await browser.sleep(5000);
  readMoreEle.get(index).click();
  await browser.sleep(5000);
  browser.navigate().back();
}
async function fn_donate(donateEle, index) {
  await browser.sleep(2000);
  let list = element.all(By.cssContainingText("#active_campaign a", " Donate"));
  await list.get(index).click();
  await browser.sleep(10000);
  console.log("donate--");
}
function fn_randomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
