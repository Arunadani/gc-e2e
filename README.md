# GC e2e

## Prerequisites

- Install [node](https://nodejs.org)
- Install protractor

  `npm install -g protractor`

- Install [chrome browser](https://www.google.com/chrome/)

## Steps to execute automation script

- Clone repo

  `git clone git@github.com:Arunadani/gc-e2e.git`

- Go to app repo

  `cd ./gc-e2e`

- Install the app

  `npm ci`

- To run automation script in staging

  `npm run test:staging`

- To run automation script in qa

  `npm run test:qa`

- To run automation script in locally

  `npm run test`

## OnError Debugging

```
[12:17:39] I/launcher - Running 1 instances of WebDriver
[12:17:39] I/direct - Using ChromeDriver directly...
[12:17:39] E/direct - Error code: 135
[12:17:39] E/direct - Error message: Could not find update-config.json. Run 'webdriver-manager update' to download binaries.
```

> the `webdriver-manager` version that is provided by `Protractor` is not uptodate, we need to update manually

- Run this command to update webdriver-manager

  `node node_modules/protractor/bin/webdriver-manager update`
