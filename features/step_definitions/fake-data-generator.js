const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");
const { existsSync } = require("fs");
const path = require("path");

Given("a file called {string}", function (string) {
  expect(existsSync(path.join(string))).to.eql(true);
});

When("it has a column specification", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("it generates some data", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});
