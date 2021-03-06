import { Then, When, Given } from "cucumber";
import {
  browser,
  element,
  By,
  ElementFinder,
  ExpectedConditions,
} from "protractor";
import { getEle } from "../helper/gcHelper";
let login = getEle("login");

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;
let email = element(By.name(login.userEmail));
let password = element(By.css(login.userPassword));

function fn_clearEmailPass() {
  password.clear();
  email.clear();
}

Given("Click on logout", async () => {
  element(By.css(login.userProfile)).click();
  await browser.sleep(1000);
  element(By.xpath(login.userLogout)).click();
  await browser.sleep(5000);
});

Then("Click login button", async () => {
  /*Enter Login*/
  let loginBtn =  element(By.xpath(login.userLogin));
  loginBtn.isEnabled().then(function(){
    loginBtn.click();
  })  
  await browser.sleep(8000); 
});

When("Click on Sign In menu", async () => {
  /*Click on signin*/
  let signInMenu=element(By.cssContainingText(getEle("loginEle"), "Sign In"))
  await signInMenu.isPresent().then(function(){
    signInMenu.click();
  })
  await browser.sleep(2000);

  /*Check page loaded*/
 await expect(
    element(
      By.cssContainingText(login.userCheckEle, login.userCheckFor)
    ).isPresent()
  ).to.eventually.true;
  fn_clearEmailPass();
  await browser.sleep(2000);
});
Then("Enter correct email and password", async () => {

  email.sendKeys("anshcardinal@gmail.com");
  await browser.sleep(3000);

  password.sendKeys("Putrajay4");
  await browser.sleep(2000);
});

Then("Enter only password", async () => {
  /*enter password*/
  password.sendKeys("password");
  await browser.sleep(2000);
});

Then("Enter wrong email", async () => {
  email.sendKeys("ee@yahoo");
});
Then("Enter only email", async () => {
  /*enter email*/
  email.sendKeys("arunarose@gmail.com");
  await browser.sleep(2000);
});
Then("Enter correct username & wrong password", async () => {
  email.sendKeys("anshcardinal@gmail.com");
  await browser.sleep(3000);
  password.sendKeys("11");
  await browser.sleep(3000);
});
Then("Enter unregistered email & password", async () => {
  email.sendKeys("anu@gmail.com");
  await browser.sleep(3000);
  password.sendKeys("11");
  await browser.sleep(3000);
});
Then ("Check toast message {string}",async (toast) => {
    switch(toast)
  {
    case "pass": expect(element(By.cssContainingText(".row h3", " User Dashboard")).isPresent()).to.exist;
    break;

    case "fail":element(By.xpath("//div[@aria-label='Invalid credentials.']")).isDisplayed().then(function(text){
      console.log("Toast message",text);
    });
    break;

    default: console.log("===>login button not enabled");
  }
});
function toast(toast)
{  
  if (toast=="pass") 
  {
     expect(
      element(By.cssContainingText(".row h3", " User Dashboard")).isPresent()
    ).to.exist;
  }
  else if(toast=="fail")
  {
  element(By.xpath("//div[@aria-label='Invalid credentials.']")).isDisplayed().then(function(text){
  console.log("Toast message",text); 
  });
 }
 else
 {
   console.log("LOGIN BUTTON - NOY ENABLED")
 }
}