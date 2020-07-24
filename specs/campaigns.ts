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

When("Click on Donate menu", async () => {
  await element(By.cssContainingText(".navbar-nav a", "Donate")).click();
  browser.sleep(2000);
  expect(
    element(By.cssContainingText(".row h3", " Browse Campaigns")).isPresent()
  ).to.eventually.true;
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

// atleast greater than 0 #active_campaign .blog_card

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
  let blogCard = element(By.css("#active_campaign .card_img_hover_sec"));
  let list_By = element.all(By.css("#active_campaign .blog_card .card_by"));
  let list_author = element.all(
    By.css("#active_campaign .blog_card .card_author")
  );
  let list_title = element.all(
    By.css("#active_campaign .blog_card .card_title")
  );
  let list_readMore = element.all(
    By.css("#active_campaign .blog_card .btn-light")
  );
  let list_whatsapp = element.all(
    By.css("#active_campaign .blog_card .fa-whatsapp")
  );
  let list_facebook = element.all(
    By.css("#active_campaign .blog_card .fa-facebook")
  );

  let list_progressBar = element.all(
    By.css("#active_campaign .blog_card .progress-bar")
  );
  let list_goalAmount = element.all(
    By.css("#active_campaign .blog_card .ch_goal")
  );
  let list_percentage = element.all(
    By.css("#active_campaign .blog_card .percentes")
  );
  let list_raisedAmount = element.all(
    By.css("#active_campaign .blog_card .price-raised")
  );
  let list_remainingDays = element.all(
    By.css("#active_campaign .blog_card .remaining-days")
  );
  let list_donate = element.all(
    By.css("#active_campaign .blog_card .float-right")
  );

  /* mouse hover*/
  // browser.actions().mouseMove(blogCard.get(0)).perform();
  browser.sleep(2000);
  /*By*/
  expect(list_By.get(0).isPresent()).to.eventually.true;
  browser.sleep(1000);
  /*author*/
  expect(list_author.get(0).isPresent()).to.eventually.true;
  browser.sleep(1000);
  /*title*/
  expect(list_title.get(0).isPresent()).to.eventually.true;
  browser.sleep(1000);
  /*social media - whatsapp */
  expect(list_whatsapp.get(0).isPresent()).to.eventually.true;
  browser.sleep(1000);
  /*social media - facebook */
  expect(list_facebook.get(0).isPresent()).to.eventually.true;
  browser.sleep(1000);
  /*readmore*/
  expect(list_readMore.get(0).isPresent()).to.eventually.true;
  browser.sleep(1000);
  /* Bottom Info*/
  /*Raised amount*/
  expect(list_raisedAmount.get(0).isPresent()).to.eventually.true;
  browser.sleep(1000);
  /*Porgress bar*/
  expect(list_progressBar.get(0).isPresent()).to.eventually.true;
  browser.sleep(1000);
  /*Percentage*/
  expect(list_percentage.get(0).isPresent()).to.eventually.true;
  browser.sleep(1000);
  /*goalAmount*/
  expect(list_goalAmount.get(0).isPresent()).to.eventually.true;
  browser.sleep(1000);
  /*Remaining days*/
  expect(list_remainingDays.get(0).isPresent()).to.eventually.true;
  browser.sleep(1000);
  /*Donate*/
  expect(list_donate.get(0).isPresent()).to.eventually.true;
  browser.sleep(1000);

  fn_donate(list_donate);
  fn_readMore(list_readMore);
  console.log("end---->");
  /*read more*/
  //list_readMore.get(0).click();
  // browser.sleep(1000);
  await browser.sleep(2000);
});

function fn_readMore(readMoreEle) {
  readMoreEle.get(0).click();
  browser.sleep(1000);
  browser.navigate().back();
}
function fn_donate(donateEle) {
  donateEle.get(0).click();
  browser.sleep(1000);
  browser.navigate().back();
}
