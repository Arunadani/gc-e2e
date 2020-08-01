import { getEle } from './gcHelper';
let proxy = getEle('proxy');

export const url = {
  qa: `https://${proxy.user}:${proxy.pwd}@qa.givecharity.org`,
  staging: 'https://staging.givecharity.org',
  prod: 'https://givecharity.org'
};

/* export function getUrl() {
  if (argv) {
    console.log("env", argv);
    for (let i in process.argv) {
      let str = process.argv[i];
      // console.log("str", str);
      if (str.indexOf('--env') == 0) {
        // return url[str.substr(10)];
      }
    } 
  }
  //return url.staging;
} */
