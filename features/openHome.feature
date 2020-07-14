Feature: gc-e2e Test

    @Initial
    Scenario: Homepage
        Given Open homepage URL
        Then check logo present
