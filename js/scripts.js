//Buisiness Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

// UI Logic

$(document).ready(function() {
  $("form#pizzaPrice").submit(function(event) {
    event.preventDefault();

  });
});