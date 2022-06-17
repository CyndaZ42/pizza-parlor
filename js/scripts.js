//Buisiness Logic

function Pizza(toppings, amountOfToppings, size) {
  this.toppings = toppings;
  this.amountOfToppings = amountOfToppings;
  this.size = size;
  this.price = 8 + amountOfToppings + (size * 2);
}

Pizza.prototype.getPrice = function() {
  console.log(this.price)
  return this.price;
}

// UI Logic

$(document).ready(function() {
  $("form#pizzaPrice").submit(function(event) {
    event.preventDefault();
    const size = parseInt($("input:radio[name=size]:checked").val());
    let toppingPrice = 0;
    let toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppingPrice += parseInt($(this).val());
      toppings.push($(this).val().slice(2))
    });
    const newPizza = new Pizza(toppings, toppingPrice, size);
    $("#output").text("Your pizza with " + toppings + " will cost $" + newPizza.getPrice() + ". Unfortunately, we are not able to accept online payments at this time. Thank you.");
  });
});