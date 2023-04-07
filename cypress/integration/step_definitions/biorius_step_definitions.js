import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

When(/^I open the browser$/, function () {
    // step vide, pas besoin d'implémentation
});

When(/^I open Biorius$/, function () {
    cy.visit('')
});

Then(/^$/, function () {
   //
});

When(/^"([^"]*)"$/, part => {
    //
});
