Feature: GetMyBoat

  I want to open GetMyBoat page
@focus 
Scenario: Opening GetMyBoat page
    Given I open GetMyBoat page
    Then I see "Boat Rentals & Yacht Charters Near Me | GetMyBoat" in the title
@focus 
  Scenario: Different kind of opening
    Given I kinda open GetMyBoat page
    Then I am very happy
