describe('Headerindex Component Tests', () => {
  beforeEach(() => {
    
      cy.visit('http://localhost:5173/'); // Burası önemli unutma.terminal sırası da önemli.
  });

  it('"Acıktım" button is clicked', () => {
      
      cy.get('[data-testid="aciktim-Button"]')
          .should('exist') 
          .and('be.visible') 
          .and('contain.text', 'ACIKTIM'); 

      
      cy.get('[data-testid="aciktim-Button"]').click();
      cy.url().should('include', '/order'); 
  });
});


describe('İsim Alanı Testleri', () => {
  beforeEach(() => {
      
      cy.visit('http://localhost:5173/order');
  });

  it("isim alanı görünüyor mu?", () => {
    cy.get('[data-testid="adTest"]')
    .should('exist')
    .and('be.visible')
    .and('have.attr', 'placeholder', 'Adınızı giriniz');
  });

  it('Boyut seçimi çalışıyor mu?', () => {
    
    cy.contains('Boyut seçmelisiniz!').should('be.visible');

    
    cy.get('[id="Küçük"]').check();
    cy.contains('Boyut seçmelisiniz!').should('not.exist');
});


});


