describe('Krepšelis', function () {

    beforeEach(function () {
        cy.fixture('resultsCart').then(function (results) {
            this.results = results
        });
    });

    it('Pridėti produktai', function () {

        for (var i = 0; i < 3; i++) {
            const productsNames = this.results['productsNames'];
            const products = this.results.products;

            cy.visit('http://localhost:3000/cart/add?product=hosting-hostinger-' + productsNames[i]);

            for (var k = 0; k < 4; k++) {
                cy.get('#select-' + products[i]['prices'][k]['period'] + '-month-period').click({force: true});
                cy.get('#product-period-' + products[i]['prices'][k]['period']).contains(products[i]['prices'][k]['monthlyPrice']);
                cy.get('#cart-total').contains(products[i]['prices'][k]['totalPrice']);
            }
        }
    });
});