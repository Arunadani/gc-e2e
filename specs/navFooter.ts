import { Then } from "cucumber";
import { browser, element, By } from "protractor";

import staticLinks from "../helper/staticLinks.json";

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;
