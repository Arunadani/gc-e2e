Feature: Footer Test

    @Initial
    Scenario: Verify footer Present
        When Check is footer present?
        Then Check "4" columns are present?
        Then Check is copyright area present?

    @Initial
    Scenario Outline: Verify copyright Area
        Then Click on "<media>" copy rights

        Examples:
            | media           |
            | copyright       |
            | terms&Condition |
            | privacy&Policy  |
            | staff           |

    @Initial
    Scenario Outline: Verify social media links
        Then Click on "<media>" social media link

        Examples:
            | media     |
            | twitter   |
            | facebook  |
            | instagram |
            | linkedin  |
            | whatsapp  |

    @Initial
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






