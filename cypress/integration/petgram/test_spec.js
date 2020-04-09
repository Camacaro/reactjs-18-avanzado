

describe('Petgram', function() {
    
    it('para ver si la app funciona', function() {
        cy.visit('/')
    } )

    it('navegamos a una categoria y vemos fotos', function(){
        cy.visit('/pet/1')
        // tomar elementos html dentro de la visa
        cy.get('article')
    })

    it('si podemos navegar con la navbar a la home', function(){
        cy.visit('/pet/1')
        // tomar elementos html dentro de la visa el primero y hacer click
        cy.get('nav a').first().click()
        cy.url().should('include', '/')
    })

    it('los usuarios no registrados ven el formulario de registro e inicio de sesion al ir a favs ', function(){
        cy.visit('/favs')
        // tomar elementos html dentro de la visa el primero y hacer click
        cy.get('form').should('have.length', 2) 
    })
})