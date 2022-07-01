declare type BrandURLS = 'boohoo.com' | 'boohooman.com' | 'nastygal.com' | 'karenmillen.com' | 'coastfashion.com' | 'warehousefashion.com' | 'oasis-stores.com' | 'dorothyperkins.com' | 'burton.co.uk' | 'wallis.co.uk' | 'misspap.com'

declare namespace Cypress {
        interface Chainable<Subject> {
            goOffline(): Chainable<null>;
            createUser(brand: BrandURLS): Chainable<Subject>;
        }
}