
Cypress.Commands.add('endereco', () => {
    const apiUrl = Cypress.env('MY_API_URL');
    cy.request({
        method: "GET",
        url: apiUrl,


        failOnStatusCode: "false"
    }).then((response) => {


        expect(response.status).to.eq(200)

    })
})
