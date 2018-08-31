var spicyAhi = {
 fishType: "Ahi",
 sauce: "Siracha & Mayo",
 price: 100.00,
 rice: "white",
 ounces: 8
};

var x = spicyAhi.sauce;
window.alert(x);

//ask user for amount of spicy ahi to buy.
var amount = prompt("Amount to buy")
//Display total amount of ounces the user will buy.
var total = amount * spicyAhi.Ounces;
window.alert("buying" + totalOunces);
//Then display the total dollar amount.
var totalDollar = amount * spicyAhi.price;
window.alert("your total price: + totalDollar");