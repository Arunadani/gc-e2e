@Initial
Feature: donate Test

  Scenario: Select an active campiagn from Donate page
    Given Click on Donate menu
    When Click on Active Campaign
    Then Click donate in campaign card

  Scenario: Enter the required fields in Donate Form
    Then Select Currency
    And Enter the amount
    Then Enter first name
    And Enter email
    Then Enter phone number
    And Click on Proceed to Pay
  
  Scenario: Payment: Enter Credit cards details
    Then Check Payment section is present?
    Then Enter the card name
    And Enter the card number
    And Click donate on payment section

  
  Scenario Outline: Payment - Negative test cases
    Given Click on Donate menu
    When Click on Active Campaign
    Then Click donate in campaign card

    Then Select Currency
    And Enter the amount
    Then Enter first name
    And Enter email
    Then Enter phone number
    And Click on Proceed to Pay

    Then Check Payment section is present?
    Then Enter the wrong card name "<name>"
    Then Enter the wrong card details and "<number>" and "<date>" and "<cvv>" and "<zip>"
    And Click donate on payment section

    Examples:
      | name | number    | date | cvv | zip |
      | @74  |           |      |     |     |
      | test | 410051006 | 0119 | 11  |     |






