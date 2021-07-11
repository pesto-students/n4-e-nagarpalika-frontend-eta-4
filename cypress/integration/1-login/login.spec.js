/** @format */

console.log(Cypress.env("CYPRESS_HOST"));
describe("Login Flow Test", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit(Cypress.env("CYPRESS_HOST"));
  });

  it("displays two todo items by default", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.

    cy.get("[data-cy=login-button]")
      .should("be.visible")
      .click()
      .location("pathname")
      .should("equal", "/login");
    // cy.get(".todo-list li").should("have.length", 2);
    // // We can go even further and check that the default todos each contain
    // // the correct text. We use the `first` and `last` functions
    // // to get just the first and last matched elements individually,
    // // and then perform an assertion with `should`.
    // cy.get(".todo-list li").first().should("have.text", "Pay electric bill");
    // cy.get(".todo-list li").last().should("have.text", "Walk the dog");
  });
});
