let productName = "Badge";
let price = 9;
let stock = 2;
let invntoruValue = price * stock;

function sale(requestedQuantity){
  if (Number.isInteger(requestedQuantity) && requestedQuantity > 0 && requestedQuantity <= stock){
    stock -= requestedQuantity;
    invntoruValue = price * stock;
    console.log("Sold one!");
    console.log("inventory value: " + invntoruValue);
  }
  else {
    console.log("Refused");
  }
}

function restock(deliveryquantity){
  if (Number.isInteger(deliveryquantity) && deliveryquantity > 0){
    stock += deliveryquantity;
    invntoruValue = price * stock;
    console.log("The new stock: " + stock);
    console.log("inventory value: " + invntoruValue);
  }
  else {2
    console.log("Refused!");
  }
}

sale(1);
sale(1);
restock(3);
sale(1);