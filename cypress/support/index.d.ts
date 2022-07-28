declare type BrandURLS = 'boohoo.com' | 'boohooman.com' | 'nastygal.com' | 'karenmillen.com' | 'coastfashion.com' | 'warehousefashion.com' | 'oasis-stores.com' | 'dorothyperkins.com' | 'burton.co.uk' | 'wallis.co.uk' | 'misspap.com'

declare type TestArtefact = {
    orderNumber: string;
    orderTotal: string;
    orderEmail: string;
    deliveryMethod: string;
    paymentMethod: string;
    items: Array<{
        sku: string;
        quantity: number;
    }>;
    groupBrand: string;
    testScenario: string;
    locale: string;
};
declare namespace Cypress {
        interface Chainable<Subject> {
            goOffline(): Chainable<null>;
            createUser(brand: BrandURLS): Chainable<Subject>;
            createArtefact: (testArtefact: TestArtefact, filename: string) => void;
        }
}