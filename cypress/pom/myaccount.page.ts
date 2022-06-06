import AbstractPage from './abstract/abstract.page';

class MyAccountPage implements AbstractPage {
  goto (): void {
    cy.visit('/myaccount');
  }

  click =
    {
      logOutLink () {
        cy.get('a[data-tau="account_signout"]').click();
      },
      orderHistoryLink () {
        cy.get('a[data-tau="navigation_orderHistory"]').click();
      },
      loadMoreButton () {
        cy.get('a[data-tau="orders_load_more"]').click();
      },
      startReturnButton () {
        cy.get('a[class="b-order_details_general-button b-button m-outline m-small"]').invoke('removeAttr', 'target').click();
      },
      accountDetailsLink () {
        cy.get('a[data-tau="navigation_editProfile"]').click();
      },
      addressesLink () {
        cy.get('a[data-tau="navigation_addressList"]').click();
      },
      paymentOptionsLink () {
        cy.get('a[data-tau="navigation_paymentDetails"]').click();
      }
    };

  actions =
    {
      viewNewestOrderHistory () {
        cy.get('a[data-tau="navigation_orderHistory"]').should('be.visible').click();
        cy
          .get('a[data-tau="orders_viewOrder"]')
          .eq(0)
          .click();
      },
      loadMoreOrders () {
        if (cy.get('a[data-tau="orders_load_more"]').should('be.visible')) {
          cy.get('a[data-tau="orders_load_more"]').click();
        }
      },
      updateAccountName (newName: string) {
        cy.get('#dwfrm_profile_customer_firstname').clear().type(newName);
        cy.get('button[data-tau="profile_customer_save"]').click();
      },
      editDefaultAddress (line1: string) {
        cy.get('section[data-tau="address_book_item_default"]').find('a[data-tau="address_book_edit"]').click();
        cy.get('.l-account_main-section').should('be.visible');
        cy.get('#dwfrm_address_address1').clear().type(line1);
        cy.get('button[data-tau="address_submit"]').click();
      },
      createAddress (firstName: string, lastName: string, phone: string, line1: string, city: string, county: string, code: string) {
        cy.get('a[data-tau="address_book_addNewAddress"]').click();
        cy.get('#dwfrm_address_firstName').should('be.visible').type(firstName);
        cy.get('#dwfrm_address_lastName').type(lastName);
        cy.get('#dwfrm_address_phone').type(phone);
        cy.get('.m-secondary').click();
        cy.get('#dwfrm_address_address1').should('be.visible').type(line1);
        cy.get('#dwfrm_address_city').type(city);
        cy.get('#dwfrm_address_states_stateCode').type(county);
        cy.get('#dwfrm_address_postalCode').type(code);
        cy.get('button[data-tau="address_submit"]').click();
      },
      deleteAddress () {
        cy.get('.b-cards_grid-footer > .b-button').click();
        cy.get('[data-tau="dialog_delete_address_confirm"]').click();
      },
      addCard (cardNumber: string, cardOwner: string) {
        cy.get('a[data-tau="address_book_addNewAddress"]').click();
        cy.get('.l-account_main-section').should('be.visible');
        cy.get('#dwfrm_creditCard_cardNumber').type(cardNumber);
        cy.get('#dwfrm_creditCard_cardOwner').type(cardOwner);
        cy.get('#dwfrm_creditCard_expirationMonth').select('03').should('have.value', '3');
        cy.get('#dwfrm_creditCard_expirationYear').select('2030').should('have.value', '2030');
        cy.get('.m-mobile_column > .b-button').click();

      },
      deleteCard (cardEnd: string){
        cy.contains(cardEnd).should('be.visible');
        cy.get('.b-cards_grid-footer > .b-button').eq(0).click();
        cy.get('#maincontent > div > div.l-account.b-account.m-account_subpage > main > div.l-account_main > div > div > div > div:nth-child(3) > div > div > div.b-dialog-footer.m-actions > button:nth-child(1)').click();
        
      },
      trackNewestOrder (){
        cy.get('.b-order_item-button b-button m-small m-outline m-view_order').eq(1).click();
        cy.url().should('include', 'order-trackform?orderID=');
        cy.get('button[data-tau="track_order_submit"]').click();
      },
      trackOrderByNumber (){
        cy.get('.b-order_item-button b-button m-small m-outline m-view_order').eq(1).click();
        cy.url().should('include', 'order-trackform?orderID=');
        cy.get('#dwfrm_trackOrder_orderNumber').clear().type('UK300151163');
        cy.get('button[data-tau="track_order_submit"]').click();
      }
    };
    
  assertions =
    {
      assertOrderHistoryPageTitle (text: string) {
        cy.url().should('include', text);
      },
      assertStartReturnPageIsDisplayed () {
        cy.url().should('include', '/page/returns-and-refunds.html');
      },
      assertOrderDetailsContent () {
        cy.get('.b-account-title').should('be.visible');
        cy.get('.b-summary_group').should('be.visible');
      },
      assertLoadedOrders () {
        cy.get('.b-load_progress-value').eq(1).should('be.greaterThan', '10');
      },
      assertAccountDetails (email: string) {
        cy.get('#account-email-input').should('have.value', email);
      },
      assertNameGreetingMessage (newName: string) {
        cy.get('p[data-tau="greeting_message"]').should('be.visible').then(element => {
          expect(element.text().trim().toUpperCase()).to.contain(newName);
        });
      },
      assertDefaultAddressPresence () {
        cy.get('section[data-tau="address_book_item_default"]').should('be.visible');
      },
      assertDefaultAddressData (addressName: string, addressSummary: string) {
        cy.get('section[data-tau="address_book_item_default"]').find('.b-address-name').should('contain.text', addressName);
        cy.get('section[data-tau="address_book_item_default"]').find('.b-address-summary').should('contain', addressSummary);
      },
      assertNewAddressData (addressName: string) {
        cy.contains(addressName).should('be.visible');
      },
      assertAddressNotPresent (addressName: string) {
        cy.get('.b-cards_grid > div').should('not.contain', addressName);
      },
      assertCardDetails (cardEnd: string, owner: string) {
        cy.contains(cardEnd).should('be.visible');
        cy.contains(owner).should('be.visible');
      },
      assertCardNotPresent (cardEnd: string){
        cy.get('.b-cards_grid').should('not.contain', cardEnd);
      },
      assertOrderCantBeTracked (){
        cy.get('.b-form-message').should('include', 'Sorry, this order number does not match our records.');
      },
      assertOrderCanBeTracked (){
        cy.get('.b-form-message').should('include', 'We found your order');
      },

    };
}

export default new MyAccountPage();