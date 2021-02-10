import { Then, When } from "cucumber";
import { browser, element, By } from "protractor";

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;
const assert = chai.assert;

var longWait = 20000;
var shortWait = 10000;

let compId = "app-browse-campaign ";

When("Navigate to Donate", async () => {
  console.log("donate menu click");
  await element(By.cssContainingText(".navbar-nav a", "Donate")).click();
  await browser.sleep(5000);
  await expect(
    element(By.cssContainingText(".row h3", " Browse Campaigns")).isPresent()
  ).to.eventually.true;
});

Then("Should have category filter checkbox", async () => {
  await expect(await element.all(By.css(compId + " .boxes .btn")).count()).to.equal(
    6
  );
});

Then("Should have filter by time period", async () => {
  await expect(element(By.css(compId + "#cat")).isPresent()).to.eventually.true;
});

Then("Should have 4 options in time period filter", async () => {
  expect(await element.all(By.css(compId + "#cat option")).count()).to.equal(4);
});

Then("Should have Search input field", async () => {
  await expect(element(By.css(compId + "input#table_filter")).isPresent()).to
    .eventually.true;
});

Then("Should have Search button", async () => {
  await expect(element(By.css(compId + "button#searchBtn")).isPresent()).to.eventually
    .true;
});

Then("Should have {string} Campaign Tab", async (type) => {
  let ccEle =
    type === "active" ? "a#ongoing_campaignId" : "a#completed_campaignId";
  await expect(element(By.css(`${compId} ${ccEle}`)).isPresent()).to.eventually.true;
});

When("Click on {string} Campaign Tab", async (type) => {
  let ccEle =
    type === "active" ? "a#ongoing_campaignId" : "a#completed_campaignId";
  element(By.css(`${compId} ${ccEle}`)).click();
 await expect(element(By.css(`${compId} ${ccEle}.active`)).isPresent()).to.exist;
    
});

Then("Should have {string} campaign cards", async (type) => {
  let ccEle =
    type === "active" ? "div#active_campaign" : "div#completed_campaign";
  await browser.sleep(2000);
  let list_card = element.all(By.css(`${ccEle} campaign-card`));
  list_card.count().then(async (cardsNum) =>{
    await expect(cardsNum).to.be.at.least(1);
  });
});
Then('Check {string} pagination & functionality', async (type) =>{
  let ccEle =
  type === "active" ? "#active_campaign" : "#completed_campaign";
await browser.sleep(2000);

let pageNum= 0;
console.log("type-->"+ccEle);   
let pageEle = element.all(By.css(`${ccEle}  li`));
await pageEle.count().then(async(totalPage)=>{
      for(totalPage>1;pageNum<(totalPage-1);pageNum++)
        {
         console.log("pageNumInex"+pageNum, "of"+totalPage);
         await pageEle.get(pageNum).click();
         await browser.sleep(10000);
         await element.all(By.css(`${ccEle}  .team-block`)).count().then(async(cardCount)=>{
          console.log("cardCount-->"+cardCount);
           if(pageNum==0 )
           {await  expect (cardCount).to.be.equal(9);
            
            return;}
           else if(pageNum==1)
           { 
             await expect (cardCount).to.be.lt(9);
             return;}
             
          return;
          
         });
        } }); });

Then(
  "Campaign: {string}, Card: {string} Should have a title",
  async (type, index) => {
    let ccEle =
      type === "active" ? "div#active_campaign" : "div#completed_campaign";
    let card = element.all(By.css(`${ccEle} campaign-card>div h5`));
    await card
      .get(index)
      .getText()
      .then((text) => {
        console.error("Title: <------>", text);
        //expect(text.length).to.be.gt(1);
        //console.log("Expect len-->"+text.length);
        //expect(text.length).to.have.lengthOf.above(2);
      });
  }
);

Then(
  "Campaign: {string}, Card: {string} Should have a donee",
  async (type, index) => {
    let ccEle =
      type === "active" ? "div#active_campaign" : "div#completed_campaign";
    let card = element.all(By.css(`${ccEle} campaign-card>div .card-donee`));
    await card
      .get(index)
      .getText()
      .then((text) => {
        console.error("Donee: ", text);
        expect(text.length).to.be.gt(1);
      });
  }
);

Then(
  "Campaign: {string}, Card: {string} Should have image",
  async (type, index) => {
    let ccEle =
      type === "active" ? "div#active_campaign" : "div#completed_campaign";
    let card = element.all(By.css(`${ccEle} campaign-card>div .card-img img`));
    expect(await card.get(index).isPresent()).to.be.true;
  }
);

Then(
  "Campaign: {string}, Card: {string} Should have a Goal amount",
  async (type, index) => {
    let ccEle =
      type === "active" ? "div#active_campaign" : "div#completed_campaign";
    let card = element.all(
      By.css(`${ccEle} campaign-card>div .card-info .text-right span`)
    );
    await card
      .get(index)
      .getText()
      .then((text) => {
        console.error("Goal amount: ", text);
        expect(text.length).to.be.gt(1);
      });
  }
);

Then(
  "Campaign: {string}, Card: {string} Should have a Raised amount",
  async (type, index) => {
    let ccEle =
      type === "active" ? "div#active_campaign" : "div#completed_campaign";
    let card = element.all(
      By.css(`${ccEle} campaign-card>div .card-info .price-raised span`)
    );
    await card
      .get(index)
      .getText()
      .then((text) => {
        console.error("Raised amount: ", text);
        expect(text.length).to.be.gt(1);
      });
  }
);

Then(
  "Campaign: {string}, Card: {string} Should have a Progress bar",
  async (type, index) => {
    let ccEle =
      type === "active" ? "div#active_campaign" : "div#completed_campaign";
    let card = element.all(
      By.css(`${ccEle} campaign-card>div .progress-bar-striped`)
    );
    expect(await card.get(index).isPresent()).to.be.true;
  }
);

Then(
  "Campaign: {string}, Card: {string} Should have a Percentage of Raised amount",
  async (type, index) => {
    let ccEle =
      type === "active" ? "div#active_campaign" : "div#completed_campaign";
    let card = element.all(
      By.css(`${ccEle} campaign-card>div .card-info .percentes`)
    );
    await card
      .get(index)
      .getText()
      .then((text) => {
        console.error("Raised Percentage: ", text);
        expect(text.length).to.be.gt(1);
      });
  }
);

Then(
  "Campaign: {string}, Card: {string} Should have a Remaining Days",
  async (type, index) => {
    let ccEle =
      type === "active" ? "div#active_campaign" : "div#completed_campaign";
    let card = element.all(
      By.css(`${ccEle} campaign-card>div .remaining-days span`)
    );
    type === "active"
      ? await card
          .get(index)
          .getText()
          .then((text) => {
            console.error("Remaining Days: ", text);
            expect(text.length).to.be.gt(0);
          })
      : expect(await card.isPresent()).to.be.false;
  }
);

Then(
  "Campaign: {string}, Card: {string} Should have a WhatsApp share option",
  async (type, index) => {
    let ccEle =
      type === "active" ? "div#active_campaign" : "div#completed_campaign";
    let card = element.all(
      By.css(`${ccEle} campaign-card>div .social-btn a.wa i`)
    );
    type === "active"
      ? expect(await card.get(index).isPresent()).to.be.true
      : expect(await card.get(index).isPresent()).to.be.false;
  }
);

Then(
  "Campaign: {string}, Card: {string} Should have a FaceBook share option",
  async (type, index) => {
    let ccEle =
      type === "active" ? "div#active_campaign" : "div#completed_campaign";
    let card = element.all(
      By.css(`${ccEle} campaign-card>div .social-btn a.fb i`)
    );
    type === "active"
      ? expect(await card.get(index).isPresent()).to.be.true
      : expect(await card.get(index).isPresent()).to.be.false;
  }
);

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
  //activeCampaign('#active_campaign '); //pass the ID manually
});

async function activeCampaign(ID: string) {
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
