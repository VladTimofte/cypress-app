describe('Login Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
    })

    it('ar trebui să afișeze formularul de autentificare inițial', () => {
        cy.get('h1').should('be.visible').and('contain.text', "Dad's jokes")
        cy.get('p').should('be.visible').and('contain.text', 'Press the button to retrieve a joke')

    })

    it('ar trebui să obțină și să afișeze o glumă nouă folosind fixture in cazul in care server-ul returneaza eroare', () => {
        cy.fixture('joke').then((jokeData) => {
            cy.intercept('GET', 'https://icanhazdadjoke.com/', {
                statusCode: 500,
                body: jokeData
            }).as('jokeResponse')

            cy.get('button').click()

            cy.wait('@jokeResponse')
            cy.get('p').should('contain.text', "Haha, uite o gluma buna din fixtures!")
        })
    })
})