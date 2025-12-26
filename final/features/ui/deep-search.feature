@ui
Feature: Video Deep Search Navigation

  Scenario: Verify people appearances and timestamps in Deep Search
    Given ui user opens "https://demo.anyclip.com/nbadm/index.html#/" page
    And ui user clicks on video number 2 in "Brooklyn Nets" channel
    And ui user deep searches for "James Harden" on video page
    When ui user opens "People" tab in Deep Search panel
    Then the following timestamps should be displayed:
      |            00:00:02 |
      |            00:00:33 |
      |            00:01:34 |
      | 00:01:43 - 00:01:43 |
      |            00:02:00 |
      |            00:02:07 |
      |            00:02:16 |
      |            00:02:35 |
      |            00:02:59 |
      |            00:03:06 |
