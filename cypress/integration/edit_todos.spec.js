describe("Edit todos", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Completes a todo", () => {
    cy.get(".todos")
    .find("i#done")
    .first()
    .click();

    cy.get('.todos')
    .first()
    .find('p')
    .should('have.css', 'text-decoration');
  });

  it('Edits a todo', () => {
      const inputText = 'Edited-todo'
      cy.get('.todos')
      .find('i#edit')
      .first()
      .click()

    cy.get('.todos')
    .first()
    .find('input')
    .should('exist')
    .clear()
    .type(inputText)
    .type('{enter}')

    cy.get('.todos')
    .first()
    .contains(inputText)
})

it('Deletes a todo', () => {
    cy.get('.todos')
    .find('i#delete')
    .first()
    .click()

    cy.get('.todos')
    .should("have.length", 3)
})

});
