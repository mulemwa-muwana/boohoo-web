import AbstractPage from "./abstract/abstract.page";

class WishListPage implements AbstractPage
{
    goto(): void {

            cy.visit('/wishlist');

    }

    click = {

    }

    actions = {

    }

    assertions = {
        
    }
}

export default new WishListPage();