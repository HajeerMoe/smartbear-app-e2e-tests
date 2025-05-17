/// <reference types="cypress"/>

import { LoginPage } from "../../../pages/LoginPage"
import { BasePage } from "../../../pages/BasePage"

describe('Login Verification', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('APP_BASE_URL'))
      })

    const loginPage = new LoginPage()
    const basePage = new BasePage()

    it('Validate login with valid credentials', () => {
        loginPage.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
        cy.url().should('include', 'weborders')
        basePage.getWebOrdersHeading().should('have.text', 'Web Orders')
        basePage.getLogOutButton().should('have.text', 'Logout')
        basePage.getWelcomeUserInfo().should('include.text', Cypress.env('USERNAME'))
        
    })

})