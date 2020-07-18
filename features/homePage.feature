Feature: gc-e2e Test

    @Initial
    Scenario: Homepage
        Given Open homepage URL
        Then check logo present

    @Initial
    Scenario Outline: Verifying header links
        Then click on header links "<header>"
        Examples:
            | header     |
            | home       |
            | donate     |
            | fundraise  |
            | howItWorks |
            | about      |
            | contact    |
            | signin     |
            | staff      |
    @working
    Scenario Outline: Verifying footer links
        Then click on footer links "<footer>"
        Examples:
            | footer             |
            | about              |
            | donate             |
            | fundraise          |
            | contact            |
            | howItWorks         |
            | education          |
            | medicalTreatment   |
            | ngoStraffTreatment |
            | ngoSeniorsPension  |
            | general            |

    @notworking
    Scenario Outline: Verify Social media links
        Then Click on "<media>" social media link
        Given Open homepage URL
        Examples:
            | media    |
            | facebook |

    @Initial
    Scenario: Verify footer Present
        When Check is footer present?
        Then Check "4" columns are present?
        Then Check is copyright area present?






