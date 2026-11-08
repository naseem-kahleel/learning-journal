let productName = "Badge";
let price = 9;
let stock = 2;
let invntoruValue = price * stock;

function sale(requestedQuantity){
    if ( stock > 0 && requestedQuantity <= stock){
        console.log("Sold one!");
        stock -= requestedQuantity;
        invntoruValue = price * stock;
        console.log("inventory value: " + invntoruValue);
    }
    else {
        console.log("Out of stock");
    }
}

function restock(deliveryquantity){
    stock += deliveryquantity;
    invntoruValue = price * stock;
    console.log("The new stock: " + stock);
    console.log("inventory value: " + invntoruValue);
}

sale(1);
sale(1);
sale(1);
restock(3);
sale(1);