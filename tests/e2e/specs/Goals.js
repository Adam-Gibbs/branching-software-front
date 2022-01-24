import "cypress-localstorage-commands";

describe("Adding goals", () => {
  it("displays page", () => {
    cy.setLocalStorage("userId", "479ba5b0-7ddd-11ec-a220-59c45da9bc73");
    cy.visit("/goals/add");
    cy.contains("h3", "Add new Goal");
  });

  it("can submit correct data", () => {
    cy.setLocalStorage("userId", "479ba5b0-7ddd-11ec-a220-59c45da9bc73");
    cy.visit("/goals/add");
    cy.get("input[id=add-name]").type("This is a test goal");
    cy.get("input[id=add-value]").type("502");
    cy.get("select[id=add-type]").select("Number of Ongoing Projects");
    cy.get("button[type=submit]").click();
    cy.url().should("include", "/goals");
  });

  it("reminds user if missed name field", () => {
    cy.setLocalStorage("userId", "479ba5b0-7ddd-11ec-a220-59c45da9bc73");
    cy.visit("/goals/add");
    cy.get("input[id=add-value]").type("502");
    cy.get("select[id=add-type]").select("Number of Ongoing Projects");
    cy.get("button[type=submit]").click();
    cy.contains("p", "Please fill out this field.");
  });

  it("reminds user if missed value field", () => {
    cy.setLocalStorage("userId", "479ba5b0-7ddd-11ec-a220-59c45da9bc73");
    cy.visit("/goals/add");
    cy.get("input[id=add-name]").type("This is a test goal");
    cy.get("select[id=add-type]").select("Number of Ongoing Projects");
    cy.get("button[type=submit]").click();
    cy.contains("p", "Please fill out this field.");
  });

  it("reminds user if missed type field", () => {
    cy.setLocalStorage("userId", "479ba5b0-7ddd-11ec-a220-59c45da9bc73");
    cy.visit("/goals/add");
    cy.get("input[id=add-name]").type("This is a test goal");
    cy.get("input[id=add-value]").type("502");
    cy.get("button[type=submit]").click();
    cy.contains("p", "Please fill out this field.");
  });
});

describe("Viewing goals", () => {
  it("displays page", () => {
    cy.setLocalStorage("userId", "479ba5b0-7ddd-11ec-a220-59c45da9bc73");
    cy.visit("/goals");
    cy.contains("h2", "Goals");
  });

  it("can navigate to add goals", () => {
    cy.setLocalStorage("userId", "479ba5b0-7ddd-11ec-a220-59c45da9bc73");
    cy.visit("/goals");
    cy.get("a[id=new-goal]").click();
    cy.url().should("include", "/goals/add");
  });

  it("shows created goal", () => {
    cy.setLocalStorage("userId", "479ba5b0-7ddd-11ec-a220-59c45da9bc73");
    cy.visit("/goals");
    cy.contains("h3", "This is a test goal");
    cy.contains("p", "502");
    cy.contains("p", "Number of Ongoing Projects");
  });
});

describe("Deleting goals", () => {
  it("shows delete warning", () => {
    cy.setLocalStorage("userId", "479ba5b0-7ddd-11ec-a220-59c45da9bc73");
    cy.visit("/goals");
    cy.get("button[id=delete-goal]").click();
    cy.contains("h3", "Are you sure you would like to delete");
    cy.contains("h3", "This is a test goal");
  });

  it("hides delete warning", () => {
    cy.setLocalStorage("userId", "479ba5b0-7ddd-11ec-a220-59c45da9bc73");
    cy.visit("/goals");
    cy.get("button[id=delete-goal]").click();
    cy.get("button[id=cancel-delete]").click();
    cy.contains("This is a test goal").not();
  });

  it("deletes a goal", () => {
    cy.setLocalStorage("userId", "479ba5b0-7ddd-11ec-a220-59c45da9bc73");
    cy.visit("/goals");
    cy.get("button[id=delete-goal]").click();
    cy.get("button[id=delete]").click();
    cy.contains("h3", "This is a test goal").not();
  });
});
