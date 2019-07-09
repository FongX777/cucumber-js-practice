const assert = require('assert');
const { Given, When, Then } = require('cucumber');

let count = 0;
function createProduct({ name, stock, price }) {
  if (!name) throw new Error('Invalid name');
  if (stock < 0) throw new Error('Invalid stock');
  if (price <= 0) throw new Error('Invalid price');

  count++;
  return {
    id: count,
    name,
    stock,
    price
  };
}

Given('a user has input product data {string}, {int}, and {int}', function(
  name,
  stock,
  price
) {
  this.params = {
    name,
    stock,
    price
  };
});

When('the user create the product', function() {
  try {
    this.product = createProduct(this.params);
  } catch (error) {
    this.error = error;
  }
});

Then('the product is created {string} with error message {string}', function(
  expectedSuccess,
  expectedErrorMessage
) {
  if (this.error) {
    assert.equal(String(false), expectedSuccess);
    assert.equal(this.error.message, expectedErrorMessage);
    return;
  }
  const actualSuccess = String(Boolean(this.product.id));
  assert.equal(actualSuccess, expectedSuccess);
});
