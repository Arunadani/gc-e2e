Feature: donate Test

    @Initial
    Scenario: donate functionality
        Given Click on Donate menu
        When Click on Active Campaign
        Then Click on donate
    @Initial
    Scenario: Donate form
        Then Click on currency
        And Enter the amount
        Then Enter first name
        And Enter email
        Then Enter phone number
        And Click on pay

    @Initial
    Scenario: Payment
        Then check Payment section present?





