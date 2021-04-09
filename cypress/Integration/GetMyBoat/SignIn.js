import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";



Given(`I am on the SignIn page`, () => {

  cy.get('li.Navigation_item__3eCAu:nth-child(3) > a').click();
});

And(`I enter Email Address as {string}`, (emailAddress) => {
  cy.get('#email').type(emailAddress);
});

And(`I enter LoginPassword as {string}`, (password) => {
  cy.get('#password').type(password);
});

When(`I click the SignIn button`, () => {
  cy.get('button[type="submit"]').click();
});

Then(`I expect an error message {string} to be displayed`, (errorMessage) => {
 cy.get('div[class="FbnXS"]').should(($ele) =>{
   expect($ele).to.contain(errorMessage)
 });

});
