import { getEle } from "./gcHelper";
let proxy = getEle("proxy");

export const url = {
  qa: `https://${proxy.user}:${proxy.pwd}@qa.givecharity.org`,
  staging: "https://staging.givecharity.org",
  prod: "https://givecharity.org",
};
