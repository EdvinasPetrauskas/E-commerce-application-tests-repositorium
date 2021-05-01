describe('Navigacija', function () {

    beforeEach(function () {
        cy.fixture('resultsNavigation').then(function (results) {
            this.results = results;
        });
    });

    it('Aplankyta: Pagrindinis puslapis', function () {
        cy.visit('http://localhost:3000/');
    });

    it('Kalbų pasirinkimai ir jų nuorodos', function () {
        cy.get('#data-qa-language-selector').click();


        cy.get('#data-qa-languages div').each(($el, i) => {
            cy.wrap($el)
                .children()
                .should('have.attr', 'href')
                .and('eq', this.results.urls[i]);
        });
    });

    it('Produktų kategorijos ir jų produktų nuorodos', function () {
        cy.get('#hosting').click();
        cy.get('#hosting-elements li').each(($e, i) => {
            cy.wrap($e)
                .children()
                .should('have.attr', 'href')
                .and('eq', this.results.menuItems[0]['links'][i]);
        });
        cy.get('#hosting').click();

        cy.get('#vps').click();
        cy.get('#vps-elements li').each(($e, i) => {
            cy.wrap($e)
                .children()
                .should('have.attr', 'href')
                .and('eq', this.results.menuItems[1]['links'][i]);
        });
        cy.get('#vps').click();

        cy.get('#domain').click();
        cy.get('#domain-elements li').each(($e, i) => {
            cy.wrap($e)
                .children()
                .should('have.attr', 'href')
                .and('eq', this.results.menuItems[2]['links'][i]);
        });
        cy.get('#domain').click();

        cy.get('#pricing')
            .should('have.attr', 'href')
            .and('eq', '/pricing');
    });

    it('Vartotojo anketos mygtukas ir jo nuoroda', function () {
        cy.get('#client-area')
            .should('have.attr', 'href')
            .and('eq', '/cpanel-login');
    });

    it('Krepšelio mygtukas ir jo nuoroda', function () {
        cy.get('#cart')
            .should('have.attr', 'href')
            .and('eq', '/cart');
    });
});