Feature: Fundraise

  Scenario: signUp
    When Click on Fundraise
    And Enter first name, middle name, last name
    And Enter Email
    And Choose Country & Phone Number
    And Click on Sign Up
    Then Check Verify OTP displayed