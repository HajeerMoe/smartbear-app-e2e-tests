/// <reference types="cypress"/>

import ViewAllOrdersPage from "../../../pages/ViewAllOrdersPage"
import LoginPage from "../../../pages/LoginPage"

describe('View All Orders Verification @Regression', () => {
    const loginPage = new LoginPage()
    const viewAllOrdersPage = new ViewAllOrdersPage()
    beforeEach(() => {
        loginPage.login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"))
    })

    it('TG11S - T123 Validate "View All Orders" table', () => {
        viewAllOrdersPage.getRows().should('have.length', 9)
        viewAllOrdersPage.getTableHeaders().should('have.length', 13)

        const expectedHeaderText = [
            "", "Name", "Product", "#", "Date", "Street", "City", 
            "State", "Zip", "Card", "Card Number", "Exp", "" ]

        viewAllOrdersPage.getTableHeaders().each((el, index) => { 
            cy.wrap(el)
                .invoke('text')
                .then(text => {
                    const normal = text.replace(/\u00a0/g, ' ').trim()
                    expect(normal).to.eq(expectedHeaderText[index])
                })
        })
    })
        
        it('TG11S - T124 Validate CheckAll and UncheckAll buttons', () => {
            viewAllOrdersPage.getColumn(0).each((el) => {
                cy.wrap(el).find('input').should('not.be.checked')
            })

            viewAllOrdersPage.getCheckAllButton().click()
            viewAllOrdersPage.getColumn(0).each((el) => {
                cy.wrap(el).find('input').should('be.checked')
            })
        })

        it('TG11S - T125 Validate rows can be deleted', () => {
            viewAllOrdersPage.getRows().should('have.length', 9)
            viewAllOrdersPage.getColumn(0).first().click()
            viewAllOrdersPage.getDeleteSelectedButton().click()
            viewAllOrdersPage.getRows().should('have.length', 8)
        })

        it('TG11S - T125 Validate rows can be deleted', () => {
            // viewAllOrdersPage.getColumn(0).each(el => {
            //     cy.wrap(el).click()
            // })
            viewAllOrdersPage.getRows().should('have.length', 9)
            viewAllOrdersPage.getCheckAllButton().click()
            viewAllOrdersPage.getDeleteSelectedButton().click()
            viewAllOrdersPage.getEmptyOrdersTableMessage().should('include.text', 'List of orders is empty. In order to add new order use this link.')
            viewAllOrdersPage.getRightPanelMainContentTable().should('not.exist')

        })

        /*
        1. Install Grep Dependency
            npm i cypress-grep -D
        2. Mark your tests as @smoke or @regression
        3. Create more custom scripts in package.json and use these tags to fetch/filter some tests with specified tags
        4. Run scripts in the Terminal
        */
})