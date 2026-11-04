function inventoryValue(price , quantity){

    return price * quantity;
}

function reStock(currentStock , deliveryQuantity){

        return currentStock + deliveryQuantity;  
    }

    function stockAfterSale(currentStock){

    
    if(currentStock > 0){

        return currentStock - 1;
       
    }

    else{

        console.log("Out of stock")
        return 0;
    }
}


console.log("The inventroy value: "+ inventoryValue(4 , 3));
console.log("The inventroy value: "+ inventoryValue(4 , 0));
console.log("The inventroy value: "+ inventoryValue(0 , 3));


    stock = stockAfterSale(6);
    console.log("remain stock " + stock);

    console.log(reStock(0 , 3));
    console.log(reStock(2 , 0));
    console.log(reStock(2 , 4));