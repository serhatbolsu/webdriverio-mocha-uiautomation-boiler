const request = require('superagent');

function main() {
  if (process.env.TEST_FRAMEWORK === undefined) {
    throw new Error('TEST_FRAMEWORK should be defined either as "jest" or "wdio"');
  } else if (process.env.HOOK_URL === undefined) {
    throw new Error('HOOK_URL should be defined as Microsoft teams channel hook url');
  }
  const file = process.argv[2];
  if (!file) throw new Error('File path is not given');

  const platform = process.env.TEST_FRAMEWORK;
  const hookUrl = process.env.HOOK_URL;
  const project = process.env.PROJECT_NAME;
  let environment = process.env.PROJECT_ENVIRONMENT;
  let type = process.env.PROJECT_TEST_TYPE;
  const buildUrl = process.env.BUILD_URL;

  let total = 0;
  let passed = 0;
  let failed = 0;
  let skipped = 0;

  // logic to get results
  if (platform === 'jest') {
    const testData = require(file);
    total = testData['numTotalTests'];
    passed= testData['numPassedTests'];
    failed = testData['numFailedTests'];
    skipped = total - passed - failed;
  } else if (platform === 'wdio') {
    const testData = require(file);
    environment = testData['capabilities'][0]['browserName'];
    type = 'UI';
    passed = testData['state']['passed'];
    failed = testData['state']['failed'];
    skipped = testData['state']['skipped'];
    total = passed + failed + skipped;
  }

  let results = `**${total} Tests**: &#x2714;${passed} passed`;
  if (failed > 0) results += `, &#x2757;${failed} failed`;
  if (skipped > 0) results += `, &#x2796;${skipped} skipped`;

  request.post(hookUrl)
      .send(
          {
            "@type": "MessageCard",
            "@context": "http://schema.org/extensions",
            "themeColor": "33F0FF",
            "summary": `Test report for ${project}`,
            "sections": [
              {

                "activityTitle": `## ${project}, ${environment}, ${type}`,
                // "activitySubtitle": "Status of build #90",
                "facts": [
                  {
                    "name": "Environment",
                    "value": environment,
                  },
                  // {
                  //   "name": "Type",
                  //   "value": "UI",
                  // },
                  {
                    "name": "Status",
                    "value": results,
                  },
                ],
                "markdown": true,
              },
            ],
            "potentialAction": [
              {
                "@type": "OpenUri",
                "name": "View Report",
                "targets": [
                  { "os": "default", "uri": buildUrl },
                ],
              },
            ],
          },
      )
      .then( (res) => {
        console.log(`Post results to Microsoft Teams with status: ${res.status}`);
      });
}

main();
