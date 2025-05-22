import BasePage from "./BasePage";

export default class OrderPage extends BasePage {
    getSectionHeaders() {
        return cy.contains('h3');
    }

    getSectionHeader(headerText) {
        return this.getSectionHeaders().contains(headerText)
    }
    // Product dropdown
    getProductDropdown() {
        return cy.get('#ctl00_MainContent_fmwOrder_ddlProduct');
    }

    selectProduct(prodName) {
        this.getProductDropdown().select(prodName)
    }
    // Quantity input
    getQuantityInput() {
        return cy.get('#ctl00_MainContent_fmwOrder_txtQuantity');
    }

    enterProdInfo(prodName, Quantity) {
        this.selectProduct(prodName);
        this.getQuantityInput().type(Quantity)

    }

    // Total field (read-only)
    getTotalInput() {
        return cy.get('#ctl00_MainContent_fmwOrder_txtTotal');
    }

    getNameInput() {
        return cy.get('#ctl00_MainContent_fmwOrder_txtName');
    }

    getStreetInput() {
        return cy.get('#ctl00_MainContent_fmwOrder_TextBox2');
    }

    getCityInput() {
        return cy.get('#ctl00_MainContent_fmwOrder_TextBox3');
    }

    getStateInput() {
        return cy.get('#ctl00_MainContent_fmwOrder_TextBox4');
    }

    getZipInput() {
        return cy.get('#ctl00_MainContent_fmwOrder_TextBox5');
    }



    // Price per unit input (read-only)
    getPricePerUnitInput() {
        return cy.get('#ctl00_MainContent_fmwOrder_txtUnitPrice');
    }

    // Discount input
    getDiscountInput() {
        return cy.get('#ctl00_MainContent_fmwOrder_txtDiscount');
    }



    // Calculate button
    getCalculateButton() {
        return cy.get('input[value="Calculate"]');
    }

    // Customer information fields

    // Payment options
    getPaymentRadio(paymentType) {
        return cy.get(`input[type="radio"][value="${paymentType}"]`);
    }

    // Card number and expiration
    getCardNumberInput() {
        return cy.get('#ctl00_MainContent_fmwOrder_TextBox6');
    }

    getExpirationDateInput() {
        return cy.get('#ctl00_MainContent_fmwOrder_TextBox1');
    }

    // Process and Reset buttons
    getProcessButton() {
        return cy.get('a[id$="InsertButton"]');
    }

    getResetButton() {
        return cy.get('a[id$="ClearButton"]');
    }

    // Success message
    getSuccessMessage() {
        return cy.get('strong');
    }
}