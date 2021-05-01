describe('Apmokėjimai', function () {

    beforeEach(function () {
        cy.fixture('resultsPayment').then(function (results) {
            this.results = results;
        });
    });

    it('Apmokėjimo metodai', function () {
        cy.visit('http://localhost:3000/cart/add?product=hosting-hostinger-premium');

        cy.get('#go-to-order-summary').click();
        cy.get('#go-to-sign-in').click();
        cy.get('[aria-controls=cart-login-form]').click();
        cy.get('#submit-btn').click({force: true});
        cy.get('#paypal');
        cy.get('#creditcard');
        cy.get('#coinpayments');

    });
});