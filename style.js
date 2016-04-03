var myShoppingList = [

   {
   	name: "apple",
	price: 1,
	},

    {
   	name: "tofu",
	price: 3.55,
	},

	{
   	name: "wine",
	price: 9.99,
	},
	{
   	name: "beer",
	price: 11.75,
	},
]

var total = 0; //creating global variable total to save value of total from forEach function, 
              //in order to reference it in second function to get grand total 


// Function that creates myShoppingList array listed above
myShoppingList.forEach(function(element){ // element represents each object in array

  var foodItem = document.createElement('li'); //variable to create new li element

  foodItem.innerHTML = "Item: " + element.name + " - price $" + element.price.toFixed(2); //places html inside variable foodItem that created new li element

  var foodSomething= document.getElementById("food"); //variable foodSomething to get elemennt id 'food' in order to append it to foodItem

  foodSomething.appendChild(foodItem); //appending foodItem to foodSomething
  
  total += element.price; //adds price of each object

  var listTotal= document.getElementById("salmon"); //sets variable 'listTotal' to id 'salmon' 

  listTotal.innerHTML = total; // adds value of total to html of id 'salmon'

});


// onClick function for add button on page, takes input values and adds them to page
function myFunction() {
  var inputFood = document.getElementById('inputFood').value; // sets variable 'inputFood' to value of id 'inputFood'

  var inputPrice = document.getElementById('inputPrice').value; // sets variable 'inputPrice' to value of id 'inputPrice'

  var foodItem = document.createElement('li'); // variable to create new li element
  
  foodItem.innerHTML = "Item: " + inputFood + " - price $" + inputPrice; //places html inside new li of variable 'foodItem'
  
  var foodSomething= document.getElementById("food").appendChild(foodItem); // sets variable 'foodSomething' = to id 'food' and appends 'foodItem' to id 'food'
  
  food.insertBefore(foodItem, food.firstChild); //appends 'foodItem' before firstChild of id 'food'
  

  var foodPriceNum = Number(inputPrice); // converts string value of 'inputPrice' in order to add prices together

  var listTotal= document.getElementById("salmon"); // sets variable 'listTotal' to value of id ''

  listTotal.innerHTML = total += foodPriceNum; //adds 'total' from forEach function to 'foodPriceNum' total from 'inputPrice' value
}



