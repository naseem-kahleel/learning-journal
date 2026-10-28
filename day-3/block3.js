function inventoryValue(price , quantity){

    return price * quantity
}

console.log("The inventroy value: "+ inventoryValue(4 , 3));
console.log("The inventroy value: "+ inventoryValue(4 , 0));
console.log("The inventroy value: "+ inventoryValue(0 , 3));


let currentStock = 5;

function stockAfterSale(currentStock){

    
    if(currentStock > 0){

        return currentStock - 1;
       
    }

    else{

        console.log("Out of stock")
        return 0;
    }
}

    stock = stockAfterSale(currentStock);
    console.log("remain stock " + stock);