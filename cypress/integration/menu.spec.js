/// <reference types="cypress" />

context("Menu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Menu has 2 items uncheck", () => {
    cy.get("#menu-cards")
      .should("exist")
      .get(".bg-menu-purple")
      .should("not.exist");

    cy.get("#menu-transactions")
      .should("exist")
      .get(".bg-menu-purple")
      .should("not.exist");
  });

  it("Menu item change the route when clicked and highligth", () => {
    cy.get("#menu-cards").click();

    cy.wait(300)
      .location()
      .should((location) => {
        expect(location.pathname).to.eq("/cards");
      });

    cy.get(".bg-menu-purple#menu-cards").should("exist");
    cy.get(".bg-menu-purple#menu-transactions").should("not.exist");

    // check the change on another item
    cy.get("#menu-transactions").click();

    cy.wait(300)
      .location()
      .should((location) => {
        expect(location.pathname).to.eq("/transactions");
      });

    cy.get(".bg-menu-purple#menu-cards").should("not.exist");
    cy.get(".bg-menu-purple#menu-transactions").should("exist");
  });

  it("Access to a the transaction page should display History has higglight in the menu", () => {
    cy.visit("http://localhost:3000/transactions");

    cy.get("#menu-transactions")
      .should("exist")
      .get(".bg-menu-purple")
      .should("exist");
  });
});
