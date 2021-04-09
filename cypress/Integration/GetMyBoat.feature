Feature: GetMyBoat

  I want to Sign In to GetMyBoat page

@focus 
Scenario: Open GetMyBoat page
    Given I open "GetMyBoat" page
    Then I see "Boat Rentals & Yacht Charters Near Me | GetMyBoat" in the title


@focus 
  Scenario: Create an account
    Given I am on the Create Account page
    And I enter First Name as "Automated"
    And I enter Last Name as "Testing"
    And I enter Email Address as "automatedtesting@gmail.com"
    And Choose country "South Africa"
    And I enter Phone Number as "115363600"
    And I enter Password as "mz4X8w7uzXwdTAt"
    And I enter Re-enter Password as "mz4X8w7uzXwdTAt"
    And I choose "Yes" for an email newsletter
    When I click the Create Account button
    Then I exepect to see a pop-up with "Our Agreement" heading to be displayed

    @focus 
  Scenario: Incorrect Login
    Given I am on the SignIn page
    And I enter Email Address as "automatedtesting@gmail.com" 
    And I enter LoginPassword as "12345"
    When I click the SignIn button
    Then I expect an error message "Unable to log in with provided credentials." to be displayed

