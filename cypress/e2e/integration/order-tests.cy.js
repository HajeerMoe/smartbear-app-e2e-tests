/// <reference types="cypress"/>

import LoginPage from "../../pages/LoginPage";
import OrderPage from "../../pages/OrderPage";

describe("Order Verification @Regression", () => {
  const loginPage = new LoginPage();
  const orderPage = new OrderPage();

  beforeEach(() => {
    loginPage.login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
    listOfProductsPage.clickOnLeftPanelOption('Order')
  });

  it('TG11S - T301 Validate Order processing', () => {
      orderPage.enterAllOrderInformation("FamilyAlbum",)
  });
})