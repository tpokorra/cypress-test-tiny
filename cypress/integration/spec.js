describe('typetest', () => {
  // fails:
  it('typing does not finish', () => {
       cy.server()
       cy.visit('/')
       cy.get('input[name="firstname"]')
         .should('have.value', "John")
         .clear()
         .type('Albrecht')
         .wait(1000)
         .should('have.value', "Albrecht")
  })
})
