import AbstractPage from "./abstract/abstract.page";
import homePage from "./home.page";
import { GotoOptions } from '../support/types';
import { eq, find } from "cypress/types/lodash";

class MyAccountPage implements AbstractPage {
    goto(): void {
        cy.visit('/myaccount');
    }

    click =
        {
            logOutLink() {
                cy.get('a[data-tau="account_signout"]').click();
            },
            orderHistoryLink() {
                cy.get('a[data-tau="navigation_orderHistory"]').click();
            },
            loadMoreButton() {
                cy.get('a[data-tau="orders_load_more"]').click();
            },
            startReturnButton() {
                cy.get('a[class="b-order_details_general-button b-button m-outline m-small"]').invoke('removeAttr', 'target').click();
            },
            accountDetailsLink() {
                cy.get('a[data-tau="navigation_editProfile"]').click();
            },
            addressesLink(){
                cy.get('a[data-tau="navigation_addressList"]').click();
            }

        }

    actions =
        {
            viewNewestOrderHistory() {
                cy.get('a[data-tau="navigation_orderHistory"]').should('be.visible').click();
                cy
                    .get('a[data-tau="orders_viewOrder"]')
                    .eq(1)
                    .click();
            },
            loadMoreOrders() {
                if (cy.get('a[data-tau="orders_load_more"]').should('be.visible')) {
                    cy.get('a[data-tau="orders_load_more"]').click();
                }
            },
            updateAccountName(newName: string) {
                cy.get('#dwfrm_profile_customer_firstname').clear().type(newName);
                cy.get('button[data-tau="profile_customer_save"]').click();
            },
            editDefaultAddress(line1: string){
                cy.get('section[data-tau="address_book_item_default"]').find('a[data-tau="address_book_edit"]').click();
                cy.get('.l-account_main-section').should('be.visible');
                cy.get('#dwfrm_address_address1').clear().type(line1);
                cy.get('.b-button m-small m-width_full').click();
            }


        }

    assertions =
        {
            assertOrderHistoryPageTitle(text: string) {
                cy.url().should('include', text)
            },
            assertStartReturnPageIsDisplayed() {
                cy.url().should('include', '/page/returns-and-refunds.html')
            },
            assertOrderDetailsContent() {
                cy.get('.b-account-title').should('be.visible');
                cy.get('.b-summary_group').should('be.visible');
            },
            assertAccountDetails(email: string) {
                cy.get('#account-email-input').should('have.value', email);
            },
            assertUpdatedName(newName: string){
                cy.get('p[data-tau="greeting_message"]').should('be.visible').then(element => {
                    expect(element.text().trim().toUpperCase()).to.contain(newName);
                });
                
            },
            assertDefaultAddressPresence(){
                cy.get('section[data-tau="address_book_item_default"]').should('be.visible')
            },
            assertDefaultAddressData(addressName: string, addressSummary: string){
                cy.get('section[data-tau="address_book_item_default"]').
                find('.b-address-name').should('have.text', addressName);
                cy.get('section[data-tau="address_book_item_default"]').
                find('.b-address-summary').should('have.text', addressSummary);
            },







        }
}

export default new MyAccountPage();