const { existsSync } = require("fs");
const path = require("path");
const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");

Given("a file called {string}", string => {
  expect(existsSync(path.join(string))).to.eql(true);
});

When("it has a column specification", () => {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("it generates some data", () => {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});
