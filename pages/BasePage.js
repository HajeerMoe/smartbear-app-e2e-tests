export class BasePage {
    getWebOrdersHeading() {
        return cy.get('td > h1')
    }

    getWelcomeUserInfo() {
        return cy.get('.login_info')
    }

    getLogOutButton() {
        return cy.get("#ctl00_logout")
    }

    getLeftPanelOptions() {
        return cy.get('#ctl00_menu a ')
    }
}