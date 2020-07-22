Feature: Campaigns Test

    @Initial
    Scenario: Verify campaigns section
        When Click on Donate menu
        And Check Active & Completed Campaigns are present?
        Then Check box section present?
        Then Check dropdown & search section present?
        


