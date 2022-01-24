describe("Signin", () => {
  it("loads the page", () => {
    cy.visit("/signin");
    cy.contains("span", "Sign In");
  });

  it("signs in with valid credentials", () => {
    cy.clearLocalStorage();
    cy.visit("/signin");
    cy.get("input[type=email]").type("cypressLogin");
    cy.get("input[type=password]").type("cypressPassword");
    cy.get("button[type=submit]").click();
    cy.url().should("include", "/location");
  });

  it("displays invalid with invalid credentials", () => {
    cy.clearLocalStorage();
    cy.visit("/signin");
    cy.get("input[type=email]").type("cypressLogin");
    cy.get("input[type=password]").type("wrongPassword");
    cy.get("button[type=submit]").click();
    cy.contains("h3", "Incorrect email or password");
  });

  it("asks for an email with empty email", () => {
    cy.clearLocalStorage();
    cy.visit("/signin");
    cy.get("input[type=password]").type("cypressPassword");
    cy.get("button[type=submit]").click();
    cy.contains("h3", "Email is required");
  });

  it("asks for a password with empty password", () => {
    cy.clearLocalStorage();
    cy.visit("/signin");
    cy.get("input[type=email]").type("cypressLogin");
    cy.get("button[type=submit]").click();
    cy.contains("h3", "Password is required");
  });

  it("Signin with empty credentials", () => {
    cy.clearLocalStorage();
    cy.visit("/signin");
    cy.get("button[type=submit]").click();
    cy.contains("h3", "Email is required");
    cy.contains("h3", "Password is required");
  });

  it("Redirect to signin with no session", () => {
    cy.visit("/");
    cy.url().should("include", "/signin");
  });
});
