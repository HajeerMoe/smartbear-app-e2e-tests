/// <reference types="cypress"/>
import ViewAllOrdersPage from "../../../pages/ViewAllOrdersPage"
import LoginPage from "../../../pages/LoginPage"
import BasePage from "../../../pages/BasePage"
import ListOfProductsPage from "../../../pages/ListOfProductsPage"

describe('List Of Products Verification @Regression', () => {
    const loginPage = new LoginPage()
    const listOfProductsPage = new ListOfProductsPage()
    beforeEach(() => {
        loginPage.login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"))
        listOfProductsPage.clickOnLeftPanelOptions('View all products')
    })

    it('TG11S - T201 Validate list of products table', () => {
        listOfProductsPage.getRows().should('have.length', 4)
        listOfProductsPage.getTableHeaders().should('have.length', 3)

        const expectedHeaderTexts = [
            ["Product name", "Price", "Discount"],
            ["MyMoney", "$100", "8%"],
            ["FamilyAlbum", "$80", "10%"],
            ["Screensaver", "$20", "10%"],
        ]

        listOfProductsPage.getRows().each((row, i) => {
            cy.wrap(row).children().each((cell, j) => {
                cy.wrap(cell).should('have.text', expectedHeaderTexts[i][j])
            })
        })
    })

    

      
})