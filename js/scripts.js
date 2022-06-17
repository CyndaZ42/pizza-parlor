//Buisiness Logic

function Pizza(toppings, amountOfToppings, size) {
  this.toppings = toppings;
  this.amountOfToppings = amountOfToppings;
  this.size = size;
}

// UI Logic

$(document).ready(function() {
  $("form#pizzaPrice").submit(function(event) {
    event.preventDefault();
    const size = parseInt($("#size").val());
    let toppingPrice = 0;
    let toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppingPrice += parseInt($(this).val());
      toppings.push($(this).val().slice(2))
    });
                                               console.log(toppings);
                                               console.log(toppingPrice);
    const newPizza = new Pizza()
  });
});