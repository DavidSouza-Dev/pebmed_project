
describe('Test environment', () => {
  it('Checkout Success', () => {
    
    cy.visit('/')

    cy.get("#Parcelado").click()

    cy.get(".user_payment__form--numberCard").click()
    cy.should('have.focus').type("4929753486026101")

    cy.get(".user_payment__form--expiration").click()
    cy.should('have.focus').type("0222")

    cy.get(".user_payment__form--cvv").click()
    cy.should('have.focus').type("492")

    cy.get(".user_payment__form--nameCard").click()
    cy.should('have.focus').type("David Souza")

    cy.get(".user_payment__form--cpf").click()
    cy.should('have.focus').type("88812146287")

    cy.get(".user_payment__form--cupom").click()
    cy.should('have.focus').type("pebmed")

    cy.get("select").select("10")

    cy.get(".user_payment__form--button").click()
  })

  it('Going First window and checkout success', () => {
    
    cy.get("button.confirmation_go-home.btn--primary").click()

    cy.get("#a_vista").click()

    cy.get(".user_payment__form--numberCard").click()
    cy.should('have.focus').type("4929753486026101")

    cy.get(".user_payment__form--expiration").click()
    cy.should('have.focus').type("0222")

    cy.get(".user_payment__form--cvv").click()
    cy.should('have.focus').type("492")

    cy.get(".user_payment__form--nameCard").click()
    cy.should('have.focus').type("David Souza")

    cy.get(".user_payment__form--cpf").click()
    cy.should('have.focus').type("88812146287")

    cy.get(".user_payment__form--cupom").click()
    cy.should('have.focus').type("pebmed")

    cy.get("select").select("1")

    cy.get(".user_payment__form--button").click()

  })
  
})
