import { element } from "protractor";

const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;

export function verifyAPI(apiName, respBody) {
  switch (apiName) {
    case "currencyList":
      return currencyList(respBody);

    case "campaignCatergories":
      return campaignCatergories(respBody);

    case "ongoingCampaignlist":
      return ongoingCampaignlist(respBody);

    case "completedCampaignlist":
      return completedCampaignlist(respBody);

    case "keyPerformance":
      return keyPerformance(respBody);

    case "usertoken":
      return usertoken(respBody);
  }
}

function currencyList(data) {
  expect(data.length).to.be.equal(2);
  return (
    data?.length === 2 &&
    data[0].currencyDesc === "INR" &&
    data[1].currencyDesc === "USD"
  );
}

function campaignCatergories(data) {
  expect(data.length).to.be.equal(5);
  return (
    data?.length === 5 &&
    data[0].categoryName === "Education" &&
    data[1].categoryName === "Medical Treatment" &&
    data[2].categoryName === "NGO Staff Treatment" &&
    data[3].categoryName === "NGO Seniors Pension" &&
    data[4].categoryName === "General"
  );
}

function ongoingCampaignlist(data) {
  expect(data.length).to.be.equal(2);
  campaignBasicCheck(data);
  return data?.length === 2;
}
function completedCampaignlist(data) {
  expect(data.length).to.be.equal(5);
  campaignBasicCheck(data);
  return data?.length === 5;
}
function campaignBasicCheck(data) {
  let randomNum = getRandomInt(data.length);
  assert.isString(data[randomNum].doneeName);
  return data[randomNum].campaignId != 0;
}

function keyPerformance(data) {
  return data.donarCount > 1;
}
function usertoken(data) {
  //assert.isString(data.access_token);
  expect(data.access_token != "").be.true;
  return data.expires_in !=0;
}

function isEmpty(data){
return data.isEmpty();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
