@api
@allure.epic:API_Testing
Feature: Retrieves multiple playlists

    Scenario Outline: 01 Read player multiplaylist
    When tm api user reads player multiplaylist to 'result':
      | sourceUrl             | https://www.w3schools.com                      |
      | session               | aaa                                            |
      | playlists[0].url      | https://28268.qa-anyclip.com/highlight-channel |
      | playlists[0].widgetId | ${widgetId.2}                                  |
      | publisherId           | ${publisherId.1}                               |
      | includeHighlights     | <includeHighlights>                            |
      | videoHub              | true                                           |
    Then var 'result' is equal to object:
      | playlists[0].url                                 | https://28268.qa-anyclip.com/highlight-channel |
      | playlists[0].playlistData.playlist[0].title      | HighLightVideo                                 |
      | playlists[0].playlistData.playlist[0].mediaid    | lbyusttulfkueq2biizhc4dlpfcuyz3r               |
      | playlists[0].playlistData.playlist[0].videoId    | XqINtYUBCAB2qpkyELgq                           |
      | playlists[0].playlistData.playlist[0].highlights | <resIncludeHighlights>                         |
    Examples:
      | includeHighlights | resIncludeHighlights |
      | true              | true                 |
      | false             | false                |
      |                   | false                |

