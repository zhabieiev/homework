@ui
Feature: Search on Main Page

  Scenario: Verify total video count for search
    Given ui user opens "https://demo.anyclip.com/nbadm/index.html#/" page
    When ui user searches for "James Harden" on main page
    Then search results count should be "359"
