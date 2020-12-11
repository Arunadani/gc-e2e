Feature: Footer Test


    Scenario: Verify footer Present
        When Check is footer present?
        Then Check all footer sections present?
        Then Check is copyright area present?

    Scenario Outline: Verify copyright section
        Then Click on "<crNav>" link in copyrights

        Examples:
            | crNav           |
            | copyright       |
            | terms&Condition |
            | privacy&Policy  |
            | staff           |


    Scenario Outline: Verify social media section
        Then Click on "<media>" link in social media

        Examples:
            | media     |
            | twitter   |
            | facebook  |
            | instagram |
            | linkedin  |
            | whatsapp  |

    Scenario Outline: Verify footer links
        Then click on static links "<footer>"

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






