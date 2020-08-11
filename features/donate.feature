Feature: donate Test

    @Initial
    Scenario: donate functionality
        Given Click on Donate menu
        When Click on Active Campaign
        Then Click donate in campaign card
    @Initial
    Scenario: Donate form
        Then Click on currency
        And Enter the amount
        Then Enter first name
        And Enter email
        Then Enter phone number
        And Click on pay

    @end
    Scenario:Payment
        Then check Payment section present?
        Then Enter the card name
        And Enter the card number
        And Click donate on payement section

    @Initial
    Scenario Outline: Payment - Negative test cases
        Then check Payment section present?
        Then Enter the wrong card name "<name>"
        And Enter the wrong card number "<number>"
        And Click donate on payement section

        Examples:
            | name | number    | date | cvv | zip |
            | @74  |           |      |     |     |
            | test | 410051006 | 0119 |     |     |




