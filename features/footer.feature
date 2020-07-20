Feature: Footer Test

    @Initial
    Scenario: Verify footer Present
        When Check is footer present?
        Then Check all footer sections present?
        Then Check is copyright area present?

    @Initial
    Scenario Outline: Verify copyright section
        Then Click on "<crNav>" link in copyrights

        Examples:
            | crNav           |
            | copyright       |
            | terms&Condition |
            | privacy&Policy  |
            | staff           |

    @Initial
    Scenario Outline: Verify social media section
        Then Click on "<media>" link in social media

        Examples:
            | media     |
            | twitter   |
            | facebook  |
            | instagram |
            | linkedin  |
            | whatsapp  |

    @Initial
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






