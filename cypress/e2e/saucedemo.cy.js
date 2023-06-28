/// <reference types="cypress" />
describe("test suite - conjunto de pruebas", () => {


    it("title web", () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('.login_logo').should("be.visible")
        cy.get('.login_logo').contains("Swag Labs")
        cy.get('.login_wrapper-inner').should("be.visible")
    })
    it("ingreso de usuario", () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()


    })
    it("pagina de inicio", () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('.app_logo').should("be.visible")
        cy.get('.app_logo').contains("Swag Labs")
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()




    })





})