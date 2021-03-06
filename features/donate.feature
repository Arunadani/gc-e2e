
Feature: Donate Test

  Scenario: Select an active campiagn from Donate page
    #select campaign
    Given Navigate to Donate
    Then Should have "active" Campaign Tab
    When Click on "active" Campaign Tab
    Then Should have "active" campaign cards
    Then Click on a campaign card "2"

    Then Select Currency as USD
    And Enter the amount "3"
    And Select transcation fee
    Then Enter first name "Joel"
    And Enter email
    Then Select country code
    Then Enter phone number
    And Is Anonymous field present?
    And Click on Proceed to Pay
    Then Check Payment section is present?
    Then Enter the card name
    And Enter the card Details
    #And Click donate & Verify payment on "success"


  Scenario Outline: Verify Anonymous feature on successful donation
    Given Navigate to Donate
    Then Should have "active" Campaign Tab
    When Click on "active" Campaign Tab
    Then Should have "active" campaign cards
    Then Click on a campaign card "0"
    And is Donorlist field present?
    Then is donor "<name>" displayed correctly?

    Examples:
      | name      |
      | Anonymous |


  Scenario Outline: Payment - Negative test cases
    Given Navigate to Donate
    Then Should have "active" Campaign Tab
    When Click on "active" Campaign Tab
    Then Should have "active" campaign cards
    Then Click on a campaign card "1"
    # Enter the donate form details
    Then Select Currency as USD
    And Enter the amount "5"
    Then Enter first name "Jenni"
    And Enter email
    Then Select country code
    Then Enter phone number
    And Click on Proceed to Pay
    # Enter the card details
    Then Check Payment section is present?
    Then Enter the wrong card name "<name>"
    Then Enter the wrong card details and "<number>" and "<date>" and "<cvv>" and "<zip>"
    And Click donate & Verify payment on "failure"

    Examples:
      | name | number    | date | cvv | zip |
      | test | 410051006 | 0119 | 11  | 300 |







