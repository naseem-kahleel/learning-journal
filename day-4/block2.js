
let Stock = 5;
let Price = 3;
let unitsSold = 0;
let Sales = 0;
let inventoryValue = Stock * Price;

function sell(quantity){

    if ( Stock > 0 && Stock <= 5 && quantity > 0 && quantity <= 5){

    console.log("Sold one!")
    Stock = Stock - quantity ;
    unitsSold = unitsSold + quantity;
    Sales = quantity;
    inventoryValue = Stock * Price;

    console.log("Reamining at the stock: " + Stock)
    console.log("Units sold: " + unitsSold)
    console.log("Sales quantity: " + Sales)
    console.log("The inventory value: " + inventoryValue)
}

else {

    console.log("Out of stock")

    console.log("Reamining at the stock: " + Stock)
    console.log("Units sold: " + unitsSold)
    console.log("Sales quantity: " + Sales)
    console.log("The inventory value: " + inventoryValue)
}

}



sell(1);
sell(0);





