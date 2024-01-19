
Cypress.Commands.add('endereco', () => {
    const apiUrl = Cypress.env('API_URL');
    cy.request({
        method: "GET",
        url: apiUrl,


        failOnStatusCode: "false"
    }).then((response) => {


        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array').that.is.not.empty
        
        response.body.forEach((item) => {
            expect(item).to.have.property('id');
            expect(item).to.have.property('name');
            expect(item).to.have.property('sex');
            expect(item).to.have.property('date_of_birth');
            expect(item).to.have.property('age');
        });

    })
})
