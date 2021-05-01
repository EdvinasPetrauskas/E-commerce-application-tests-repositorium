describe('Produktai', function () {

	beforeEach(function () {
		cy.fixture('resultsProducts').then(function (results) {
			this.results = results;
		});
	});

	it('Aplankyta: Pagrindinis puslapis', function () {
		cy.visit('http://localhost:3000/');
	});

	it('Navigacija iki produktų', function () {
		cy.get('[data-qa=special-offer-button]').click();
		cy.get('#pt-show-more-features-hosting-hostinger-starter').click();
	});

	it('Produktų informacija', function () {

		cy.get('#pricing-table').children().each(($e, i) => {
			const id = this.results.hosting[i]['id'];
			const title = this.results.hosting[i]['title'];
			const subtitle = this.results.hosting[i]['subtitle'];
			const discount = this.results.hosting[i]['discount'];
			const pricing = this.results.hosting[i]['pricing'];
			const renew = this.results.hosting[i]['renew'];

			cy.get('#pt-title-' + id).contains(title);
			cy.get('#pt-subtitle-' + id).contains(subtitle);
			if(id != 'hosting-cloud-economy') {
				cy.get('#pt-discount-' + id).contains(discount);
			}

			cy.get('#pt-pricing-' + id).contains(pricing);
			cy.get('#pt-renew-' + id).contains(renew);
			cy.get('#features-' + id +' li')
				.children("span").each(($ee, ii) => {
				const features = this.results.hosting[i]['features'][ii];
				cy.wrap($ee).contains(features);
			});
		})
		cy.get('#pt-show-less-features-hosting-hostinger-starter').click();

	});
});