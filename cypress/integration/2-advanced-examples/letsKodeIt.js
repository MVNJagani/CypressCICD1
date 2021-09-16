/// <reference types="cypress" />

it('OpenWebSite',()=>{
        cy.visit('http://demo.automationtesting.in/Index.html') 
})
it('Click Skip Sign In',()=>{
    cy.get('[id=btn2]').click()
})

it('Full Name',()=>{
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('VEDANT')
})

it('Last Name',()=>{
    cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('JAGANI')
})

it('Address field',()=>{
    cy.get('.col-md-8 > .form-control').type('1001 Chicago Ln')
})

it('Email field',()=>{
    cy.get('#eid > .form-control').type('testemail@gmail.com')
})

it('Phone field',()=>{
    cy.get(':nth-child(4) > .col-md-4 > .form-control').type('1112221234')
    cy.get(':nth-child(1) > .ng-pristine').check()
    
})
