import AbstractPage from "./abstract/abstract.page";
import homePage from "./home.page";
import { GotoOptions } from '../support/types';

class PdpPage implements AbstractPage
{
    goto(): void {
        cy.visit('/');
    }

    click =
    {
        addToCart(){
            cy.get('.b-product_addtocard-availability').click();
        }
    }

    actions =
    {

    }

    assertions =
    {

    }
}

export default new PdpPage();