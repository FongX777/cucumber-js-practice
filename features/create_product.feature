Feature: Product Creation
    * Product needs name, stock, price
    * name != ''
    * stock >= 0
    * price > 0

  Scenario Outline: User Create a product
    Given a user has input product data "<name>", <stock>, and <price>
    When the user create the product
    Then the product is created "<successfully>" with error message "<errorMessage>"

    Examples:
      | name | stock | price | successfully | errorMessage  |
      | Pen  | 100   | 180   | true         |               |
      | Ball | 20    | 50    | true         |               |
      | Ball | -1    | 50    | false        | Invalid stock |

