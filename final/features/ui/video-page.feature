@ui
Feature: Channel Navigation

  Scenario: Open specific video from Brooklyn Nets channel
    Given ui user opens "https://demo.anyclip.com/nbadm/index.html#/" page
    When ui user clicks on video number 6 in "Brooklyn Nets" channel
    Then video page should display title containing "Harden Goes OFF to Take the Series!"