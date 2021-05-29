Feature: API testing

    Scenario Outline: GET Method
        Given call GET Method "<api>" and "<obj>"

        Examples:
            | api           | obj          |
            | currency/list | currencyDesc |


    Scenario Outline: PUT Method
        Given call PUT Method "<put_api>"

        Examples:
            | put_api                                         |
            | https://chercher.tech/sample/api/product/create |



