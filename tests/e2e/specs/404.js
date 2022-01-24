import "cypress-localstorage-commands";

describe("404 page", () => {
  it("loads the page", () => {
    cy.visit("/404");
    cy.contains("h2", "Page not found");
  });

  // from https://stackoverflow.com/a/58989070
  it("returns to home", () => {
    cy.setLocalStorage("userId", "479ba5b0-7ddd-11ec-a220-59c45da9bc73");
    cy.visit("/404");
    cy.get("button[id=go-home]").click();
    cy.url().should("include", "/location");
  });

  it("returns to signin", () => {
    cy.visit("/404");
    cy.get("button[id=go-home]").click();
    cy.url().should("include", "/signin");
  });
});
