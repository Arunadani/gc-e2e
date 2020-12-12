Feature: Verify Campaign Page

  Scenario Outline: Verify "<type>" campaigns page components
    When Click on Donate menu
    Then Should have "<type>" Campaign Tab
    Then Should have category filter checkbox
    Then Should have filter by time period
    Then Should have 4 options in time period filter
    Then Should have Search input field
    Then Should have Search button
    Then Should have "<type>" campaign cards
    Examples:
      | type      |
      | completed |
      | active |

  Scenario Outline: Verify "<type>" Campaign Tab
    When Click on "<type>" Campaign Tab
    Then Should have "<type>" campaign cards
    Examples:
      | type      |
      | completed |
      | active |

  Scenario Outline: Verify a "<type>" Campaign Card
    When Click on "<type>" Campaign Tab
    Then Should have "<type>" campaign cards
    Then Campaign: "<type>", Card: "<cardIndex>" Should have a title
    Then Campaign: "<type>", Card: "<cardIndex>" Should have a donee
    Then Campaign: "<type>", Card: "<cardIndex>" Should have image
    Then Campaign: "<type>", Card: "<cardIndex>" Should have a Goal amount
    Then Campaign: "<type>", Card: "<cardIndex>" Should have a Raised amount
    Then Campaign: "<type>", Card: "<cardIndex>" Should have a Progress bar
    Then Campaign: "<type>", Card: "<cardIndex>" Should have a Percentage of Raised amount
    Then Campaign: "<type>", Card: "<cardIndex>" Should have a Remaining Days
    Then Campaign: "<type>", Card: "<cardIndex>" Should have a WhatsApp share option
    Then Campaign: "<type>", Card: "<cardIndex>" Should have a FaceBook share option

    Examples:
      | cardIndex | type      |
      | 1         | completed |
      | 1         | active |


  @test
  Scenario: Veriy Active Campaigns sections
    When Click on Donate menu
    Then Verify all functionality in campaign card




