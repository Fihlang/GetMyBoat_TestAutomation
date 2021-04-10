import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";



Given(`I am on the Home page`, () => {
  cy.get('.Header_logoWrapper__1VbTB > div:nth-child(1) > img:nth-child(1)').click();
});


And(`I search for {string}`, (destination) => {
  cy.wait(5000);
  cy.get('input[id="homepage-fixed-search-input"]').scrollIntoView();
  cy.wait(5000);
    cy.get('input[id="homepage-fixed-search-input"]').type(destination);
    cy.wait(5000)
    cy.get('button[class="Search_button__3CsuE"][type="button"]').click();
});


And(`I choose {string} boat to hire`, (boat) => {
  cy.wait(10000);
  cy.get('a._3aa3R').each(($ele) =>{
   
    if($ele.contain(boat)){
      cy.wrap($ele).click();
    }
  });

});

When(`I click Send a booking Inquiry`, () => {
  cy.get('a[class="_3XEst"]').click();
});

Then(`I exepect to see a pop-up with {string} message to be displayed`, (message) => {
 

 cy.get('div[class="_1ojCM"]').should(($ele) =>{
   expect($ele).to.contain(message)
 });


});
