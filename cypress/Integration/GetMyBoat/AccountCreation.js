import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";



Given(`I am on the Create Account page`, () => {
  cy.get('.children_signup').click();
});


And(`I enter First Name as {string}`, (firstName) => {
  cy.get('#firstName').type(firstName);
});


And(`I enter Last Name as {string}`, (lastName) => {
  cy.get('#lastName').type(lastName);
});


And(`I enter Email Address as {string}`, (emailAddress) => {
  cy.get('#email').type(emailAddress);
});

And(`Choose country {string}`, (country) => {
  cy.get('select[aria-label="Phone number country"]').type(country);
});

And(`I enter Phone Number as {string}`, (phoneNumber) => {
  cy.get('input[id="phone"]').type(phoneNumber);
});

And(`I enter Password as {string}`, (password1) => {
  cy.get('input[id="password1"]').type(password1);
});

And(`I enter Re-enter Password as {string}`, (password2) => {
  cy.get('input[id="password2"]').type(password2);
});

And(`I choose {string} for an email newsletter`, (emailNewsletter) => {

  if(emailNewsletter === "Yes")
  {
       cy.get('label[for="marketing_consent-yes"]').click();
  }

  if(emailNewsletter === "No")
  {
       cy.get('label[for="marketing_consent-no"]').click();
  }
 
});

When(`I click the Create Account button`, () => {
  cy.get('button[type="button"][class="_3xHe4 "]').click();
});

Then(`I exepect to see a pop-up with {string} heading to be displayed`, (heading) => {
 

 cy.get('h1[class="mHy6D"]').should(($ele) =>{
   expect($ele).to.contain(heading)
 });


});
