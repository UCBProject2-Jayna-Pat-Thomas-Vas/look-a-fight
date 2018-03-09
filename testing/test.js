var Nightmare = require("nightmare");
var expect = require("chai").expect;
describe("Celebrity Look-a-fight", function() {
  // The default tests in mocha is 2 seconds.
  // Extending it to 30 seconds to have time to load the pages
  this.timeout(30000);
  it("should send user to the index.html page", function(done) {
    Nightmare({ show: true })
      .goto("https://radiant-atoll-80692.herokuapp.com/index.html")
      // Evaluate the title
      .evaluate(function() {
        return document.title;
      })
      // Asset the title is as expected
      .then(function(title) {
        expect(title).to.equal("Celeb-Login | Celebrity Look-A-Fight");
        done();
      });
  });
  it("should present a link to battle after login", function(done) {
    new Nightmare({ show: true })
      .goto("https://radiant-atoll-80692.herokuapp.com/index.html")
      // Enter email.
      .type("#email", "ResilD")
      // Enter password.
      .type("#password", "dummy*password")
      // Click the play button
      .click("#enter-battleroom")
      // Evaluate the following selector
      .evaluate(function() {
        // Assert the "battle" link can be found
        return document.querySelector("a[href='/battle']");
      })
      .then(function(link) {
        expect(link).to.not.equal(undefined);
        done();
      });
  });
});