describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('opens the index page', () => {
    cy.get('p').contains('Marques Reduc')
  })

  it('navigates to the blog page', () => {
    cy.get('a[href="/post"]').eq(0).click();
    cy.url().should("include", "/post")
  })
})

describe('validate blog', () => {
  it('should have only 3 blog posts by default', () => {
    cy.visit('/post')
    cy.get('ul#blog-list li').should('have.length', 3);
  })
})