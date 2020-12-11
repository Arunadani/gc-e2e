@Initial
Feature: donate Test

    Scenario: donate functionality
        Given Click on Donate menu
        When Click on Active Campaign
        Then Click donate in campaign card

    Scenario: Donate form
        Then Click on currency
        And Enter the amount
        Then Enter first name
        And Enter email
        Then Enter phone number
        And Click on pay

    Scenario:Payment
        Then check Payment section present?
        Then Enter the card name
        And Enter the card number
        And Click donate on payement section

    @test
    Scenario Outline: Payment - Negative test cases
        Given Click on Donate menu
        When Click on Active Campaign
        Then Click donate in campaign card

        Then Click on currency
        And Enter the amount
        Then Enter first name
        And Enter email
        Then Enter phone number
        And Click on pay

        Then check Payment section present?
        Then Enter the wrong card name "<name>"
        Then Enter the wrong card details and "<number>" and "<date>" and "<cvv>" and "<zip>"
        And Click donate on payement section

        Examples:
            | name | number    | date | cvv | zip |
            | @74  |           |      |     |     |
            | test | 410051006 | 0119 | 11  |     |






