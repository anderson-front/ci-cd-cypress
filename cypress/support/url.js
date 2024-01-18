
Cypress.Commands.add('endereco', () => {
    const apiUrl = Cypress.env('API_URL');
    cy.api({
        method: "GET",
        url: apiUrl,


        failOnStatusCode: "false"
    }).then((response) => {


        expect(response.status).to.eq(200)

    })
})
