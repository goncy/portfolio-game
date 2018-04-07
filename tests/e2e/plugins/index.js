// https://docs.cypress.io/guides/guides/plugins-guide.html

module.exports = (on, config) => {
  return Object.assign({}, config, {
    fixturesFolder: "tests/e2e/fixtures",
    integrationFolder: "tests/e2e/specs",
    screenshotsFolder: "tests/e2e/screenshots",
    supportFile: "tests/e2e/support/index.js"
  });
};
