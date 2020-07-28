Feature: SignIn Test

    @Initial
    Scenario: Login user - email & password
        When Click on Sign In menu
        Then Enter correct email and password
        Then Click login button
        And Click on logout
    @end
    Scenario: Login user - only password
        When Click on Sign In menu
        Then Enter only password
        Then Click login button
    @end
    Scenario: Login user - only email
        When Click on Sign In menu
        Then Enter only email
        Then Click login button
    @end
    Scenario: Login user - wrong email
        When Click on Sign In menu
        Then Enter wrong email
        Then Click login button
    @end
    Scenario: Login user - wrong password
        When Click on Sign In menu
        Then Enter wrong password
        Then Click login button
    @end
    Scenario: Login user - unregistered email
        When Click on Sign In menu
        Then Enter unregistered email
        Then Click login button

