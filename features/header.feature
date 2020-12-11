Feature: gc-e2e Header Test

    Scenario: Homepage
        Given Open homepage URL
        Then check logo present

    @test
    Scenario Outline: Verify header links
        Then click on header links "<header>"
        Examples:
            | header     |
            | home       |
            | donate     |
            | fundraise  |
            | howItWorks |
            | about      |
            | contact    |
            | signIn     |









