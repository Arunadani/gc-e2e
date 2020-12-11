Feature: Campaigns Test
  @test
  Scenario: Verify campaigns section
    When Click on Donate menu
    Then Check box section present?
    Then Check dropdown & search section present?
    And Check Active & Completed Campaigns are present?

  Scenario: Veriy Active Campaigns sections
    When Click on Donate menu
    Then Verify all functionality in campaign card




