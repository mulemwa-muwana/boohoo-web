import AbstractPage from "./abstract/abstract.page";
import homePage from "./home.page";

class PlpPage implements AbstractPage
{
    goto(): void {
        homePage.goto();
    }

    click = {

    }

    actions = {

    }

    assertions = {

    }
}

export default new PlpPage();