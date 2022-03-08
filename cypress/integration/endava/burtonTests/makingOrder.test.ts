describe('Making order as an user', () => {

  // What's this for again? We already ignore al uncaught client exceptions in support/index.ts
  /*
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Top level nodes have to be of the same kind.')) {
      return false
    }
  }) 
  */

  before(() => {

    /*
    HomePage.goto() 
    HomePage.login(Cypress.env('validUsername'), Cypress.env('validPassword'))
    */

    /*
    Home Page Navigate To
    Login Sequence
    */
  });

  it('Should make an order as a user', () => {

    /*
    HomePage.searchForItem('ABB01243{enter}')
    pdp.selectSize()
    validatePageContent(pdp.availabalityStatus(), 'Currently in stock')
    pdp.addToCart()
    pdp.openMiniCart()
    validatePageContent(checkoutPage.productTitle(), ' Grey Joggers ')
    checkoutPage.clickCheckOut()
    checkoutPage.chooseSavedCC(Cypress.env('securityCodeMasterVisa'))
    checkoutPage.payNow()
    validatePageTitle('Thank you for your order!')
    validateContentPresence(orderConfirmation.orderNumberSection())
    validateContentPresence(orderConfirmation.shippingInfo())
    */
  
    /*
    Search for SKU ABB01234
    PDP - Select Size
    Validate Page Contents Says In Stock
    PDP Add To Cart
    PDP Open Mini Cart
    Validate Page Content contains correct product
    Clikc Checkout
    Choose Saved Card
    Pay
    Validate Order Confirmation
    Validate Content Has Order Number
    Validate Content Has Shipping Info Correct
    */
  });
});