describe('Specialus pasiūlymas', function () {
	const buttonId = '[data-qa=special-offer-button]';
	const priceId = '[data-qa=special-offer-price]';
	const priceCentsId = '[data-qa=special-offer-price-cents]';

	const price = '0';
	const priceCents = '99';

	it('Aplankyta: Pagrindinis puslapis', function () {
		cy.visit('http://localhost:3000/');
	});

	it('Specialaus pasiūlymo mygtukas', function () {
		cy.get(buttonId).click();
	});

	it('Specialaus pasiūlymo kaina', function () {
		cy.get(priceId).should('have.text', price);
		cy.get(priceCentsId).should('have.text', priceCents);
	});
});