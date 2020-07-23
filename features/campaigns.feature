Feature: Campaigns Test

    @Initial
    Scenario: Verify campaigns section
        When Click on Donate menu
        Then Check box section present?
        Then Check dropdown & search section present?
        And Check Active & Completed Campaigns are present?


    @Initial
    Scenario: Veriy Active Campaigns sections
        Then Verify all functionality in campaign card




