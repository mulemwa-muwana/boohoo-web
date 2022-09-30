import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '#deliveryPanel > .b-checkout_card > [role="none"] > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-actions > .b-ngvip-button',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.b-minicart_product-inner',
  },
  'nastygal.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '.b-ngvip-button',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: 'button[data-tau="add_new_address"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    cartContainer: '[data-tau="checkout_products"]',
  },
  'dorothyperkins.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '#deliveryPanel > .b-checkout_card > [role="none"] > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-actions > .b-ngvip-button',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: 'button[data-tau="add_new_address"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
  },
  'burton.co.uk': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '#deliveryPanel > .b-checkout_card > [role="none"] > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-actions > .b-ngvip-button',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: 'button[data-tau="add_new_address"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
  },
  'wallis.co.uk': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '#deliveryPanel > .b-checkout_card > [role="none"] > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-actions > .b-ngvip-button',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: 'button[data-tau="add_new_address"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': undefined,
  'warehousefashion.com': undefined,
  'oasis-stores.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '#deliveryPanel > .b-checkout_card > [role="none"] > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-actions > .b-ngvip-button',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: '.b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '#address-autocomplete',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '#dwfrm_singleshipping_shippingAddress > fieldset.address-container > fieldset:nth-child(3) > div > div > button',
    addNewAddress: 'button[data-tau="add_new_address"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm', 
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button'
  },
  'misspap.com': undefined
};

const variables = Cypress.env() as EnvironmentVariables;

class ShippingPage implements AbstractPage {

  goto (): void {
    homePage.goto();
  }

  click = {
    submitPromoCode () {
      const promoCodeBtn = selectors[variables.brand].promoCodeBtn;
      cy.get(promoCodeBtn).click();
    },
    addNewAddress () {
      const addNewAddress = selectors[variables.brand].addNewAddress;
      cy.get(addNewAddress).click();
    },
    cancelAddingNewAddress () {
      const cancelAddingNewAddress = selectors[variables.brand].cancelAddingNewAddress;
      cy.get(cancelAddingNewAddress);
    },
    proceedToBilling () {
      const proceedToBilling = selectors[variables.brand].proceedToBilling;
      cy.wait(1000);
      cy.get(proceedToBilling).click({force: true});
    },
    editSavedAddress () {
      const editSavedAddress = selectors[variables.brand].editSavedAddress;
      cy.get(editSavedAddress).click();
    },
    addAddressManually () {
      const addAddressManually = selectors[variables.brand].addAddressManually;
      cy.get(addAddressManually).should('be.visible').click();
    },
    confirmEmail () {
      const confirmEmail = selectors[variables.brand].confirmEmail;
      if (variables.brand == 'oasis-stores.com') {
        cy.get(confirmEmail).type('euboohoo+guest1@gmail.com');
      }
    },
    editCart () {
      const editCart = selectors[variables.brand].editCart;
      cy.get(editCart).should('be.visible').click();
    },
    editAddress () {
      const editAddress = selectors[variables.brand].editAddress;
      cy.get(editAddress).click({force: true});
    },
    addNewAddressButton () {
      const addNewAddressButton = selectors[variables.brand].addNewAddressButton;
      cy.get(addNewAddressButton).click();
    },
    editExistingAddressButton () {
      const editExistingAddressButton = selectors[variables.brand].editExistingAddressButton;
      cy.get(editExistingAddressButton).click();
    },
    cancelAddingNewAddressForRegisteredUser () {
      const cancelAddingNewAddressForRegisteredUser = selectors[variables.brand].cancelAddingNewAddressForRegisteredUser;
      cy.get(cancelAddingNewAddressForRegisteredUser).should('be.visible').click();
    },
    viewAllAddressesLink () {
      const viewAllAddressesLink = selectors[variables.brand].viewAllAddressesLink;
      cy.get(viewAllAddressesLink).should('be.visible').click();
    },
    addPremierToCartFromShippingPage () {
      const addPremierToCartFromShippingPage = selectors[variables.brand].addPremierToCartFromShippingPage;
      cy.get(addPremierToCartFromShippingPage).should('be.visible').click();
    },
    OpenPUDOlocations () {
      const PUDOlocations = selectors[variables.brand].PUDOlocations;
      cy.get(PUDOlocations).click();
    },
    enterManuallyAddressDetails () {
      const enterManually = selectors[variables.brand].enterManually;
      cy.get(enterManually).click();
    }
  
  };

  actions = {
    clickPreferedShippingMethod (variables: EnvironmentVariables) {
      cy.get('span').contains(variables.shippingMethod).click();
    },
    promoCodeField (promoCode: string) {
      cy.get('#dwfrm_coupon_couponCode').type(promoCode);
    },
    addressLookupField (address: string) {
      const PostcodeLookup = selectors[variables.brand].PostcodeLookup;
      cy.get(PostcodeLookup).click({force: true}).type(address+'{enter}').should('be.visible');
      cy.get(PostcodeLookup).type('{enter}');
    },
    firstNameField (fname: string) {
      cy.get('[id$=addressFields_firstName][id*="shipping"]').type(fname);
    },
    lastNameField (lname: string) {
      cy.get('[id$=addressFields_lastName][id*="shipping"]').type(lname);
    },
    countrySelector () {
      cy.get('[id$=addressFields_country][id*="shipping"]'); 
    },
    phoneNumberField (phone: string) {
      cy.wait(1000);
      cy.get('[id$=addressFields_phone][id*="shipping"]').type(phone);
    },
    selectCountry (country: string) {
      cy.get('[id$=addressFields_country][id*="shipping"]').select(country).invoke('show');
    },
    adressLine1 (address1: string) {
      cy.get('[id$=addressFields_address1][id*="shipping"]').type(address1);
    },
    adressLine2 (address2: string) {
      cy.get('[id$=addressFields_address2][id*="shipping"]').type(address2);
    },
    cityFiled (city: string) {
      cy.get('[id$=addressFields_city][id*="shipping"]').type(city);
    },
    countyField (county: string) {
      cy.get('[id$=addressFields_states_stateCode][id*="shipping"]').type(county);
    },
  
    postcodeField (postcode: string) {
      cy.wait(1000);
      cy.get('[id$=addressFields_postalCode][id*="shipping"], [id$=postalcodes_postal][id*="shipping"]').type(postcode);
    },
    selectShippingMethod (shippingMethod: string) {
      cy.get('.b-option_switch-label').each(() => {
        cy.contains(shippingMethod).click({force: true});
      });
    }

  };

  assertions = {
    assertPromoCodeFieldIsDispayed () {
      cy.get('#dwfrm_coupon_couponCode').should('be.visible');
    },
    assertSavedShippingAddressIsDispayed () {
      cy.get('b-address-name').eq(1).should('be.visible').should('not.be.empty');
    }, 
    assertFirstNameIsMandatory (fname: string) {
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_address1-error').should('contain.text', fname); 
    },
    assertCityIsMandatory (city: string) {
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_city-error').should('contain.text', city); 
    },
    assertPostCodeIsMandatory (postcode: string) {
      cy.get('#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error').should('contain.text', postcode); 
    },
    assertUserProceededToBillinPage () {
      cy.url().should('include', 'billing');
    },
    assertFirstNameFieldIsPopulated (text: string) {
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_firstName').should('contain.value', text);
    },
    assertLastNameFieldIsPopulated (text: string) {
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_lastName').should('contain.value', text);
    },
    assertCountryIsSelected (text: string) {
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_country').should('contain.value', text);
    },
    assertPhoneNumberFieldIsPopulated (text: string) {
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_phone').should('contain.value', text);
    },
    assertGuestEmailFiledDispayes () {
      cy.get('#dwfrm_billing_contactInfoFields_email').should('be.visible');
    },
    assertManualAddressFieldsAreDispayed () {
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_address1').should('be.visible');
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_address2').should('be.visible');
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_city').should('be.visible');
    },
    assertOrderTotalIsDsipayed () {
      cy.get('.m-total > .b-summary_table-value').should('not.be.empty');
    },
    assertAddressDetailsAreMandatory (text: string) {
      cy.get('[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message').should('contain.text', text);
    },
    assertPostcodeLookupIsVisible () {
      const PostcodeLookup = selectors[variables.brand].PostcodeLookup;
      cy.get(PostcodeLookup).should('be.visible');
    },
    assertOtherAddressesAreVisible () {
      cy.get('.m-list > :nth-child(3) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface').should('be.visible');
    },
    assertCartShippingPageContainsContainsProduct (product: string) {
      const cartContainer = selectors[variables.brand].cartContainer;
      cy.get(cartContainer).each(() => {
        cy.contains(product.trim());
      });
    },
    assertAddressLookupIsVisible () {
      const PostcodeLookup = selectors[variables.brand].PostcodeLookup;
      cy.get(PostcodeLookup).should('be.visible');
    }
  };

}

export default new ShippingPage();
