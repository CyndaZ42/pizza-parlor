# _{Application Name}_

#### By _**Zac Waggoner**_

#### _{Brief description of application}_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## TDD

>Describe: Pizza()
>
>Test: "It should return a Pizza object with two properties for toppings and size"  
>Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");  
>Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }  
> 
>Test: "It should return a Pizza object with three properties for toppings, amount of toppings, and size"  
>Code: const myPizza = new Pizza(["anchovies", "pineapple"], 5, "medium");  
>Expected Output: Pizza { toppings: ["anchovies", "pineapple"], amountOfToppings: 5, size: "medium" }  

>Describe: Pizza.getPrice()
>
>Test: "It should return a price for the pizza object"  
>Code: myPizza.getPrice();  
>Expected Output: 10
> 

## License

Copyright (c) _2022_ _Zac Waggoner_

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._



Describe: luhn_algorithm()

test: returns string as array
code: const card = "0998445533334452";
luhn_algorithm(card);
output: ["0", "9", "9", "8", "4", "4", "5", "5", "3", "3", "3", "3", "4", "4", "5", "2"]



test: returns reversed string
code: const card = "0998445533334452";
luhn_algorithm(card);
output:  ['2', '5', '4', '4', '3', '3', '3', '3', '5', '5', '4', '4', '8', '9', '9', '0']

test: parse integers from strings
code: const card = "0998445533334452";
luhn_algorithm(card);
output:  [2, 5, 4, 4, 3, 3, 3, 3, 5, 5, 4, 4, 8, 9, 9, 0]

test: double every other digit
code: const card = "0998445533334452";
luhn_algorithm(card);
output: [4, 5, 8, 4, 6, 3, 6, 3, 10, 5, 8, 4, 16, 9, 18, 0]

test: combine digits of numbers > 9
code: const card = "0998445533334452";
luhn_algorithm(card);
output:  [4, 5, 8, 4, 6, 3, 6, 3, 4, 5, 8, 4, 1, 9, 0, 0]

test: reverse order of digits back to original
code: const card = "0998445533334452";
luhn_algorithm(card);
output: [0, 0, 4, 8, 3, 6, 4, 8, 4, 5, 6, 3, 4, 5, 1, 9]