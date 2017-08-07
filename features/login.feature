@important
Feature: login functionality
  Scenario: the user logs in to AC app using valid data
    Given the user opens AC login page
    When the user types his name in username field
    And the user types his password in password field
    And the user clicks on LogIn button
    Then homepage should be displayed