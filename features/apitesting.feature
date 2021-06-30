Feature: API testing

  @stop 
    Scenario Outline: GET API
        Given call GET Method "<api_path>" and "<api_name>"

        Examples:
            | api_path                         | api_name              |
            | gc/currency/list                    | currencyList          |
            | gc/campaign/getcategories           | campaignCatergories   |
            | gc/campaign/ongoingcampaignlist/2   | ongoingCampaignlist   |
            | gc/campaign/completedcampaignlist/2 | completedCampaignlist |
            | gc/campaign/kpi/2                   | keyPerformance        |

    @stop
    Scenario Outline: PUT API
        Given call PUT Method "<api_path>"
        Examples:
            | api_path                                        |
            | https://chercher.tech/sample/api/product/create |


    Scenario Outline: POST API
        Given call POST Method "<api_path>" and "<api_name>"
        Examples:
            | api_path    | api_name  |
            | oauth/token | usertoken |


