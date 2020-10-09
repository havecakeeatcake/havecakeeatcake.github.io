it('should render the home page', () => {
  cy.visit('/');
  cy.get('h1').contains('New Arrivals'); 
});
