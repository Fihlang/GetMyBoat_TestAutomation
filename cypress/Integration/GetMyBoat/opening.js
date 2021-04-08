import { Given } from "cypress-cucumber-preprocessor/steps";



Given(`I open  my app`, () => {
  cy.visit('/');
});
