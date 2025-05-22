export default class BasePage {
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

    getRightPanelHeading() {
        return cy.get('h2');
    }
    
    getRightPanelMainContentTable() {
        return cy.get('.content table').first()
    }

    //Resusable Table Methods
    getRows() {
        return this.getRightPanelMainContentTable().find('tr')
    }

    getTableHeaders() {
        return this.getRightPanelMainContentTable().find('th')
    }

    getRow(index) {
        return this.getRows().eq(index)
    }

    getColumn(index) {
        // return this.getRows().find(`td:nth-child(${index + 1})`)
        return this.getRows().find(`td:nth-child(${index + 1})`)
    }

    clickOnLeftPanelOptions(optionText) {
        this.getLeftPanelOptions().contains(optionText).click()
    }
}
//.content table th