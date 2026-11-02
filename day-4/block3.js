let stock = 5;
let price = 3;
let sold = 0;
let sales = 0;
let inventoryValue = stock * price;

function sale(quantity){

    if(stock > 0 && stock <= 5 && quantity > 0 && quantity <= 5){

        console.log("Sold " + quantity + "!")
        stock = stock - quantity
        sold = quantity 
        sales = quantity + sales
        inventoryValue = stock * price

        console.log("Remain stock: " + stock)
        console.log("Products sold: " + sold)
        console.log("The sales: " + sales)
        console.log("The inventroy value: " + inventoryValue)

    }

    else {

        console.log("Out of stock")

        console.log("Remain stock: " + stock)
        console.log("Products sold: " + sold)
        console.log("The sales: " + sales)
        console.log("The inventroy value: " + inventoryValue)
    }
}

sale(2);
sale(3);
sale(1);

function restock(delivreyquantity){

    if(delivreyquantity > 0){

        stock = stock + delivreyquantity
        console.log("restocking: " + stock)
    }

    else {

        console.log("Not a correct value!")
    }
}

restock(5);

sale(5);