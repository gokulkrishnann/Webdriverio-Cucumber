Feature: Login Feature

   Scenario: invalid login
      Given I open Application
      Then I verify page title Address Book - Sign In
      When I enter username test@test.com
      When I enter password test
      When I click login
      Then I verify error message Bad email or password.

   Scenario: invalid email id
      Given I open Application
      When I enter username test
      When I enter password test
      When I click login