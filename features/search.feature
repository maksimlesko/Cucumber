@important
Feature: Search feature
  Scenario: the user runs a search
    Given the user is on home page
    When the user types 'Minsk' search term in the sserach filed
    And the user clicks 'Search' icon
    Then the search must be executed



