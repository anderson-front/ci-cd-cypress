
Cypress.Commands.add('endereco', () => {

    cy.api({
        method: "GET",
        url: `${Cypress.env('url')}`,


        failOnStatusCode: "false"
    }).then((response) => {


        expect(response.status).to.eq(200)

    })
})
