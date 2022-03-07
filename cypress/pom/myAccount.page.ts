import AbstractPage from "./abstract/abstract.page";
import homePage from "./home.page";
import { GotoOptions } from '../support/types';

class MyAccount implements AbstractPage{

    goto(): void {
        homePage.goto();
    }

    click =
    {
        
    }

    actions =
    {

    }

    assertions =
    {

    }

}

export default new MyAccount();