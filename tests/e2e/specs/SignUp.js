describe("Signup", () => {
  it("loads the page", () => {
    cy.visit("/signup");
    cy.contains("span", "Sign Up");
  });

  it("displays an error with an invalid email", () => {
    cy.visit("/signup");
    cy.get("input[type=email]").type("cypressLogin");
    cy.get("button[type=submit]").click();
    cy.contains("h3", "Please enter a valid email address");
  });

  it("displays an error with an invalid password", () => {
    cy.visit("/signup");
    cy.get("input[type=password]").type("small");
    cy.get("button[type=submit]").click();
    cy.contains("h3", "Password must be at least 8 characters");
  });

  it("displays an error with empty fields", () => {
    cy.visit("/signup");
    cy.get("button[type=submit]").click();
    cy.contains("h3", "Email is required");
    cy.contains("h3", "Password is required");
    cy.contains("h3", "A first name is required");
    cy.contains("h3", "A last name is required");
  });
});
