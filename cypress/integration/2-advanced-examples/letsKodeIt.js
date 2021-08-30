/// <reference types="cypress" />

it('OpenWebSite',()=>{
        cy.visit('http://automationpractice.com/index.php') 
})
it('Click Login Btn',()=>{
    cy.get('.login').click()
})

it('Enter Email',()=>{
    cy.get('#email_create').type('test1@gmail.com')
})

it('Click Create Account',()=>{
    cy.get('#SubmitCreate > span').click()
    
})
