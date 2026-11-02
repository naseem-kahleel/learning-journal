let stock = 3;
let price = 5;
let unitsSold = 0;
let sales = 0;
let inventoryValue = price * stock;


function sale(quantity){

    if(stock > 0 && stock <= 5 && quantity > 0 && quantity <=5 && quantity <= stock ){


        console.log("Sold " + quantity + "!")
        stock = stock - quantity
        unitsSold = quantity
        sales = quantity + sales
        inventoryValue = price * stock
        ValueAfterSale = sales * price

        console.log("Remain stock: " + stock)
        console.log("Products sold: " + unitsSold)
        console.log("The sales: " + sales)
        console.log("The inventory value: " + inventoryValue )
    }

    else {

        console.log("Out of stock")
        
    }
}

sale(1)
sale(3)

function restock(delivreyquantity){

    if(delivreyquantity > 0){

    stock = delivreyquantity + stock;

    console.log("Restocking: ")
    console.log(stock)

    inventoryValue = price * stock
    console.log("The inventory value: " + inventoryValue )
}

else {

    console.log("Valid amount")
}
}


restock(2)


sale(4)
console.log("Value after sale: " + ValueAfterSale)

