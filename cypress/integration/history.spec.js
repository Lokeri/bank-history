/// <reference types="cypress" />

context("History", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/transactions");
  });

  it("Have a header and an empty sidepanel", () => {
    cy.get("#header").should("exist");
    cy.get("#history-table").should("exist");
    cy.get("#transaction-detail-none").should("exist");
    cy.get("#transaction-detail").should("not.exist");
  });

  it("Should stay on no transaction detail if we go on a incorrect one", () => {
    cy.visit("http://localhost:3000/transactions/Incorrect");
    cy.get("#transaction-detail-none").should("exist");
    cy.get("#transaction-detail").should("not.exist");
  });

  it("When i'm clicking a row the route should change, and the transaction detail appear", () => {
    cy.get("#history-table")
      .find("div#transaction-row-1")
      .should("exist")
      .click();

    cy.wait(300)
      .location()
      .should((location) => {
        expect(location.pathname).to.eq("/transactions/1");
      });

    cy.get("#transaction-detail-none").should("not.exist");
    cy.get("#transaction-detail").should("exist");

    cy.get("#transaction-row-amount-1").contains("44.20 EUR");
    cy.get("#transaction-detail-amount-1").contains("44.20 EUR");

    cy.get("#history-table")
      .find("div#transaction-row-2")
      .should("exist")
      .click();

    cy.wait(300).get("#transaction-row-amount-2").contains("-454.02 EUR");
    cy.get("#transaction-detail-amount-2").contains("-454.02 EUR");
  });
});
