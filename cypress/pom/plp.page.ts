import AbstractPage from "./abstract/abstract.page";

class PlpPage implements AbstractPage
{
    goto(): void {
        cy.visit('/new-season');
    }

    click = {

    }

    actions = {

    }

    assertions = {

    }
}

export default new PlpPage();