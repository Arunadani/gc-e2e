const url = {
  qa: "https://gcadmin:tigerhill2020@qa.givecharity.org",
  staging: "https://staging.givecharity.org",
};

export function getUrl() {
  if (process.argv) {
    for (let i in process.argv) {
      let str = process.argv[i];
      // console.log("str", str);
      if (str.indexOf("--env") == 0) {
        // return url[str.substr(10)];
      }
    }
  }
  return url.staging;
}
