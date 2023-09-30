// Write your solution in this file!
var customerName;

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'maybe bob';
}

function overwriteBestCustomer() {
  TheBestCustomer = 'the best customer';
}

const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // This will result in an error because you cannot reassign a value to a constant.
}
