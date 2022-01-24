import "cypress-localstorage-commands";

describe("Navigation pane", () => {
  it("displays on home", () => {
    cy.setLocalStorage("userId", "479ba5b0-7ddd-11ec-a220-59c45da9bc73");
    cy.visit("/");
    cy.contains("h2", "Path to Zero");
  });

  it("shows user name", () => {
    cy.setLocalStorage("userId", "479ba5b0-7ddd-11ec-a220-59c45da9bc73");
    cy.setLocalStorage("userName", "Cypress");
    cy.visit("/");
    cy.contains("h3", "Welcome Cypress");
  });

  it("shows past tab if has past", () => {
    cy.setLocalStorage("userId", "479ba5b0-7ddd-11ec-a220-59c45da9bc73");
    cy.setLocalStorage("hasPast", true);
    cy.visit("/");
    cy.contains("span", "Past Year");
  });

  it("redirect if has no past", () => {
    cy.setLocalStorage("userId", "479ba5b0-7ddd-11ec-a220-59c45da9bc73");
    cy.setLocalStorage("hasPast", false);
    cy.visit("/past");
    cy.url().should("include", "/location");
  });
});
