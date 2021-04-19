
Feature: SignIn Test

    Scenario: Login user - email & password
        When Click on Sign In menu
        Then Enter correct email and password
        Then Click login button
        And Check toast message "pass"

    Scenario: Logout
        And Click on logout

    
    Scenario: Login user - only password
        When Click on Sign In menu
        Then Enter only password
        Then Click login button
        And Check toast message "none"

   
    Scenario: Login user - only email
        When Click on Sign In menu
        Then Enter only email
        Then Click login button
        And Check toast message "none"

  
    Scenario: Login user - wrong email
        When Click on Sign In menu
        Then Enter wrong email
        Then Click login button
        And Check toast message "none"

    Scenario: Login user - Correct email & wrong password
        When Click on Sign In menu
        Then Enter correct username & wrong password
        Then Click login button
        And Check toast message "fail"
 
    Scenario: Login user - unregistered email
        When Click on Sign In menu
        Then Enter unregistered email & password
        Then Click login button
        And Check toast message "fail"

