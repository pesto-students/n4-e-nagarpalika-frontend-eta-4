/** @format */

console.log(Cypress.env("CYPRESS_HOST"));
describe("Login Flow Test", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("CYPRESS_HOST") + "/account");
  });

  it("displays two todo items by default", () => {
    cy.get("[data-cy=inputName]")
      .should("be.visible")
      .type("Mr. Test Account")
      .get("[data-cy=inputEmail]")
      .should("be.visible")
      .type("test@mail.com")
      .get("[data-cy=inputMobileNumber]")
      .should("be.visible")
      .type("9876543210")
      .get("[data-cy=inputAadharNumber]")
      .should("be.visible")
      .type("888800002222")
      .get("[data-cy=inputNagarPalika]")
      .should("be.visible")
      .select("Bangaluru")
      .get("[data-cy=inputProfession]")
      .should("be.visible")
      .select("it-professional")
      .get("[data-cy=inputGender]")
      .should("be.visible")
      .select("male")
      .get("[data-cy=submit]")
      .should("be.visible")
      .click();
  });
});
