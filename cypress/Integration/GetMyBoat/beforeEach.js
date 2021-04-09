beforeEach(() => {
  cy.log(
    "This will run before every scenario of Google.feature test, but NEVER for Facebook/Google feature files"
  );

  cy.visit("https://www.getmyboat.co.za/");
});

afterEach(() => {
  cy.log(
    "This will run after every scenario of Google.feature test, but NEVER for Facebook/Google feature files"
  );

 // cy.get('svg[class="_1EVOw"]').click();
});
