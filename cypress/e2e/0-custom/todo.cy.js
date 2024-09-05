describe('Todo App', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:4200/')
    }) 

    it('ar trebui sa adauge un todo nou si sa sa verifice lungimea, valoarea si continutul textului', () => {
        cy.get('input[placeholder="Adaugă o sarcină nouă"]').type('Sa ma uit la meci maine');
        cy.get('button.add-task').click()

        cy.get('ul li').should('have.length', 1)

        cy.get('input[placeholder="Adaugă o sarcină nouă"]').should('have.value', '')

        cy.get('ul li span').should('contain.text', 'Sa ma uit la meci maine')
    })
})