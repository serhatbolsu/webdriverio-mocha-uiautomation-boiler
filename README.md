Mocha WebdriverIO WEB Testing Boilerplate [![CircleCI](https://circleci.com/gh/serhatbolsu/webdriverio-mocha-uiautomation-boiler.svg?style=svg)](https://circleci.com/gh/serhatbolsu/webdriverio-mocha-uiautomation-boiler)
====================
WEB UI tests with Mocha, WebdriverIO v6 with PageObject

Sample and ready to use boilerplate project for e2e / ui test automation with user as the QA Engineer in mind. 

## Features
- WebdriverIO v6
- Page Object model
- Component model example (reusable ui parts within a page)
- Sauce Labs integration [SauceLabs](https://saucelabs.com/)
- Allure Report
- Screenshot capture for failing tests
- ESLint
- Windows OS Support (like: linebreak)

## How to Start

**Download a release or clone the project**

**Install**

(optional) Create your own configurations.
- Rename the `sample.env` and rename to `.env` and change required variables

```npm install```

**Run Tests**

```npm test```

**Allure Report**
(you must have installed [allure command line](https://docs.qameta.io/allure/#_get_started))

```npm run report```

**Microsoft Teams Mini Report**

```
# For Unix
export HOOK_URL=<microsoft_teams_webhook_url>
# For Windows Powershell
$env:HOOK_URL = '<microsoft_teams_webhook_url>'

npm run report.teams
```

## Tips & Tricks
## Running in SauceLabs
Add a valid `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` to your environment variables to enable that integration.
([Settting up Sauce](http://webdriver.io/guide/usage/cloudservices.html#Sauce-Labs))

`npm run test.sauce`

### Debug Command Line Flag to adjust timeout

By setting the 'DEBUG' environment variable to true, the test timeout with be essentially removed, 
allowing you to run without your tests timing out. 

`DEBUG=true npm test`
### Clean up your test results before execution

`npm run clean`
