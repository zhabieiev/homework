Feature: Selenium.Dev tests

Background:
    Given user navigates to home page

    Scenario: Verify Home page title
        When user reads the page title
        Then page title should be equal to 'Selenium automates browsers. That\'s it!'

    Scenario: Verify Documentation page title
        Given user navigates to 'Documentation' page via header
        When user reads the page title
        Then page title should be equal to 'The Selenium Browser Automation Project'

    Scenario: Navigate to custom page via search
        When user searches for 'Grid'
        And user reads the page title
        Then page title should be equal to 'Grid'

    Scenario: Navigate to custom page via side menu
        When user navigates to 'Documentation' page via header
        And user navigates to 'WebDriver' page via side menu
        And user reads the page title
        Then page title should be equal to 'WebDriver'

    @images
    Scenario: Verify number of browser driver images
        When user navigates to 'Downloads' page via header
        And user reads the number of browser driver images
        Then the count should be equal to 5
