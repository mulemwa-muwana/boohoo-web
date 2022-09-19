describe('Log in to Matflo and search for order number', function () {

    it('Go to Matflo page and log in', function () {
        cy.visit('https://172.20.161.42/cgi-bin/web_om_boohoo.exe?cachetime=1660715924.133770&noredirect&scr=WEB_PageEnterSecurity&rec=-1&workloc=None&workstn=None&reframe=')
        cy.get('#uid').clear().type('Cristian.Ionescu')
        cy.get('#pwd').clear().type('123456789')
        cy.contains('Log In').click()
        cy.get('#generalquery').type('YUJ300037563')
        cy.get('#generalquerySearch').click()
        cy.get(':nth-child(27) > .view_field_data_str > a').invoke('text').then((text) => {
            expect(text).equal('WALLIS')
        })
        cy.get(':nth-child(24) > .view_field_data_str > a').invoke('text').then((text) => {
            expect(text).equal('UKSTD')
        })
    })
})