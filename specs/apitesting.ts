import { browser, element, by } from "protractor";
var Request = require("request");
import { Then, When, Given } from "cucumber";
const chai = require("chai");
const expect = chai.expect;
const should = chai.should;
import { config } from "../config";
const apiUrl = `${config.baseUrl}:8080/gc/gc/`;

Given("call GET Method {string} and {string}", function (apiPath, obj, done) {
  Request.get(
    {
      headers: { "content-type": "application/json" },
      url: apiUrl + apiPath,
    },
    (error, response, body) => {
      if (error) {
        return console.dir(error);
      }
      console.log("obj", obj);
      let data = JSON.parse(body);
      expect(data.length).to.be.equal(2)
      //data.should.include.keys("otherObj");
      expect(response.statusCode).to.be.equal(200);
      done();
    }
  );
});
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
      console.dir("Body : ******");
      console.dir(response.body);

      console.log("Header ****:");
      console.log(response.headers);
      console.dir("******************");

      // this below line took half day of research
      done();
    }
  );
});
