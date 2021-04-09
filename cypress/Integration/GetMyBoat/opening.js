import { Given } from "cypress-cucumber-preprocessor/steps";



Given(`I open {string} page`, () => {
  //cy.visit('/');
  cy.visit("https://www.getmyboat.co.za/");
});
