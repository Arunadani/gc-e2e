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

async function mouseHover(card: ElementFinder) {
  browser.sleep(2000);
  await browser.actions().mouseMove(card).perform();
  await browser.sleep(2000);
}

async function titleCheck(title: ElementFinder) {
  expect(title.isPresent()).to.eventually.true;
}

async function readMore_Fn(readmore: ElementFinder) {
  browser.sleep(2000);
  browser
    .actions()
    .mouseMove(readmore)
    .click()
    .perform()
    .then(function () {
      expect(
        element(By.cssContainingText(".row h3", " Campaign Details"))
      ).to.be.true;
    });
  //await expect(readmore.click()).to.eventually.true;
  browser.sleep(10000);
}
When("Click on Donate menu", async () => {
  await element(By.cssContainingText(".navbar-nav a", "Donate")).click();
  browser.sleep(2000);
  expect(
    await element(
      By.cssContainingText(".row h3", " Browse Campaigns")
    ).isPresent()
  ).to.be.true;
});

Then("Check Active & Completed Campaigns are present?", async () => {
  element(By.css("#ongoing_campaignId"))
    .isPresent()
    .then(function (present) {
      expect(present).to.be.true;
    });
  browser.sleep(2000);
  element(By.css("#completed_campaignId"))
    .isPresent()
    .then(function (present) {
      expect(present).to.be.true;
    });
});
Then("Check box section present?", async () => {
  element
    .all(By.css(".boxes .btn"))
    .count()
    .then(function (size) {
      browser.sleep(2000);
      console.log("box size-->", size);
      expect(size).to.deep.equal(6);
    });
});

// atleast greater than 0 #active_campaign .blog_card

Then("Check dropdown & search section present?", async () => {
  browser.sleep(2000);
  /*Dropdown*/
  element(By.css("#cat"))
    .isPresent()
    .then(function (present) {
      expect(present).to.be.true;
    });

  /*Text*/
  element(By.css("#table_filter"))
    .isPresent()
    .then(function (present) {
      expect(present).to.be.true;
    });
  /*search*/
  element(By.css("#searchBtn"))
    .isPresent()
    .then(function (present) {
      expect(present).to.be.true;
    });
});

When("Click on a campaign", async () => {
  /*blog present*/
  element(By.css("#active_campaign .blog_card"))
    .isPresent()
    .then(function (present) {
      expect(present).to.be.true;
    });

  /*hover present*/
  element(".card_img_hover")
    .isPresent()
    .then(function (present) {
      expect(present).to.be.true;
    });

  /*By present*/
  expect(element(By.cssContainingText(".card_by", "by")).isPresent()).to
    .eventually.true;

  /*author present*/
  element(By.css(".card_author"))
    .isPresent()
    .then(function (present) {
      expect(present).to.be.true;
    });

  /*social media */
  // element.all(By.css(".social-group a"))
});

Then("Verify all functionality in campaign card", async () => {
  let blogCard = element.all(By.css("#active_campaign .card_img_hover_sec"));
  let title = element.all(By.css("#active_campaign .blog_card"));
  let readMore = element.all(
    By.css("#active_campaign .card_img_hover .btn-light")
  );
  /* mouse hover*/
  mouseHover(blogCard.get(0));

  /* title check*/
  //#active_campaign .card_title
  titleCheck(title.get(0));

  /*Read more
#active_campaign .card_img_hover .btn-light */
  readMore_Fn(readMore.get(0));
});
