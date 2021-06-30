import { browser, element, by } from "protractor";
import { verifyAPI } from "./apiHelper";
var Request = require("request");
import { Then, When, Given } from "cucumber";
const chai = require("chai");
const expect = chai.expect;
const should = chai.should;
import { config } from "../config";
const apiUrl = `${config.baseUrl}:8080/gc/`;

const postData = {
  id: 11,
  name: "JOE TESTING",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

Given(
  "call GET Method {string} and {string}",
  function (apiPath, apiName, done) {
    Request.get(
      {
        headers: { "content-type": "application/json" },
        url: apiUrl + apiPath,
      },
      (error, response, body) => {
        let data = JSON.parse(body);
        expect(response.statusCode).to.be.equal(200);
        expect(verifyAPI(apiName, JSON.parse(body))).be.true;
        done();
      }
    );
  }
);
Given("call PUT Method {string}", function (apiPath, done) {
  Request.put(
    {
      headers: { "content-type": "application/json" },
      url: apiPath,
      body: JSON.stringify({
        name: "some stupid guy",
        description: "90033",
      }),
    },
    (error, response, body) => {
      if (error) {
        return console.dir(error);
      }
      expect(response.statusCode).to.be.equal(201);
      // console.dir("Body : ******");
      // console.dir(response.body);

      // console.log("Header ****:");
      // console.log(response.headers);
      // console.dir("******************");

      // this below line took half day of research
      done();
    }
  );
});
Given(
  "call POST Method {string} and {string}",
  function (apiPath, apiName, done) {
    Request.post(
      {
        headers: { "content-type": "application/json" },
        url: apiUrl + apiPath,
        // body: JSON.stringify(postData),
      },
      (error, response, body) => {
        if (error) {
          return console.dir(error);
        }
        // console.dir("Body : ******");
        // console.dir(response.body);

        // console.log("Header ****:");
        // console.log(response.headers);

        expect(verifyAPI(apiName, JSON.stringify(body))).be.true;

        // this below line took half day of research
        done();
      }
    );
  }
);
