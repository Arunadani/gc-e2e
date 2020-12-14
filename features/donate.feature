
Feature: Donate Test

  Scenario: Select an active campiagn from Donate page
    Given Navigate to Donate
    When Click on Active Campaign
    Then Click on a campaign card "3"

  Scenario: Enter the required fields in Donate Form
    Then Select Currency as USD
    And Enter the amount
    Then Enter first name
    And Enter email
    Then Select country code
    Then Enter phone number
    And Click on Proceed to Pay

  Scenario: Payment: Enter Credit cards details
    Then Check Payment section is present?
    Then Enter the card name
    And Enter the card number
    And Verify payment on "success"
  @test
  Scenario Outline: Payment - Negative test cases
    Given Navigate to Donate
    When Click on Active Campaign
    Then Click on a campaign card "3"
    # Enter the donate form details
    Then Select Currency as USD
    And Enter the amount
    Then Enter first name
    And Enter email
    Then Select country code
    Then Enter phone number
    And Click on Proceed to Pay
    # Enter the card details
    Then Check Payment section is present?
    Then Enter the wrong card name "<name>"
    Then Enter the wrong card details and "<number>" and "<date>" and "<cvv>" and "<zip>"
    And Verify payment on "failure"

    Examples:
      | name | number    | date | cvv | zip |
      | test | 410051006 | 0119 | 11  | 300 |







