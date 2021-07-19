@buy_products
Feature: Buy products
    In order to buy products
    As a customer
    I want to be able to add several products in the cart

  Scenario: Insert a product in the cart
    Given I search by the product Faded Short Sleeve
    And I add the product in the cart
    And I go to the Cart page
    And I see the correct product information
    And I proceed to checkout to sign in
    And I confirm the delivery address and terms of service
    When I choose the payment method
    Then I should see the order summary