@api
@allure.epic:API_Testing
Feature: Player request

  Scenario Outline: 02 Read player request
    When tm api user reads player request to 'result':
      | url               | https://www.fake.domain.com  |
      | session           | aaa                          |
      | widgetId          | ${widgetId.1}                |
      | publisherId       | ${publisherId.1}             |
      | includeHighlights | <includeHighlights>          |
    Then var 'result' is equal to object:
      | url               | https://www.fake.domain.com          |
      | playListSize      | 1                                    |
      | session           | aaa                                  |
      | nlpType           | ANYCLIP_NLP                          |
      | clipIds           | ["lbyusttulfkueq2biizhc4dlpfcuyz3r"] |
      | includeHighlights | <resIncludeHighlights>               |
    Examples:
      | includeHighlights | resIncludeHighlights |
      | true              | PUBLISHED            |
      | false             | NONE                 |
      |                   | NONE                 |