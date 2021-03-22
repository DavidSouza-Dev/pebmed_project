describe('Test environment error', () => {
    
  it('Handling Error NumberCard', () => {
    
    cy.visit('/')

    cy.get("#Parcelado").click()

    cy.get(".user_payment__form--numberCard").click()
    cy.should('have.focus').type("1234753486026101")

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

  it('Handling Error expiration', () => {
    
    cy.visit('/')

    cy.get("#Parcelado").click()

    cy.get(".user_payment__form--numberCard").click()
    cy.should('have.focus').type("4929753486026101")

    cy.get(".user_payment__form--expiration").click()
    cy.should('have.focus').type("12")

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

  it('Handling Error cvv', () => {
    
    cy.visit('/')

    cy.get("#Parcelado").click()

    cy.get(".user_payment__form--numberCard").click()
    cy.should('have.focus').type("4929753486026101")

    cy.get(".user_payment__form--expiration").click()
    cy.should('have.focus').type("0222")

    cy.get(".user_payment__form--cvv").click()
    cy.should('have.focus').type("49")

    cy.get(".user_payment__form--nameCard").click()
    cy.should('have.focus').type("David Souza")

    cy.get(".user_payment__form--cpf").click()
    cy.should('have.focus').type("88812146287")

    cy.get(".user_payment__form--cupom").click()
    cy.should('have.focus').type("pebmed")

    cy.get("select").select("10")

    cy.get(".user_payment__form--button").click()
  })

  it('Handling Error nameCard', () => {
    
    cy.visit('/')

    cy.get("#Parcelado").click()

    cy.get(".user_payment__form--numberCard").click()
    cy.should('have.focus').type("4929753486026101")

    cy.get(".user_payment__form--expiration").click()
    cy.should('have.focus').type("0222")

    cy.get(".user_payment__form--cvv").click()
    cy.should('have.focus').type("492")

    cy.get(".user_payment__form--nameCard").click()
    cy.should('have.focus')

    cy.get(".user_payment__form--cpf").click()
    cy.should('have.focus').type("88812146287")

    cy.get(".user_payment__form--cupom").click()
    cy.should('have.focus').type("pebmed")

    cy.get("select").select("10")

    cy.get(".user_payment__form--button").click()
  })

  it('Handling Error CPF', () => {
    
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
    cy.should('have.focus').type("12312146287")

    cy.get(".user_payment__form--cupom").click()
    cy.should('have.focus').type("pebmed")

    cy.get("select").select("10")

    cy.get(".user_payment__form--button").click()
  })

  it('Handling Error installments', () => {
    
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

    cy.get(".user_payment__form--button").click()
  })

  it('Handling Error blank form', () => {
    
    cy.visit('/')

    cy.get("#Parcelado").click()

    cy.get(".user_payment__form--button").click()
  })

  it('Going second window and get checkout error', () => {

    cy.visit('/')

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

    /* cy.get(".user_payment__form--cupom").click()
    cy.should('have.focus').type("pebmed") */

    cy.get("select").select("1")

    cy.get(".user_payment__form--button").click()
    
    cy.get("button.confirmation_return").click()

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

    /* cy.get(".user_payment__form--cupom").click()
    cy.should('have.focus').type("pebmed")
 */
    cy.get("select").select("1")

    cy.get(".user_payment__form--button").click()

  })
     
})