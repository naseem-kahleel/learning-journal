function inventoryValue(price,quantity){

    return (price*quantity);

}

const total1 = inventoryValue(7, 3);

console.log(total1);

const total2 = inventoryValue(7, 0);

console.log(total2);

const total3 = inventoryValue(12, 4);

console.log(total3);

const total4 = inventoryValue(0, 5);

console.log(total4);


function priceAfterDiscount(price ,discount){

    return price - discount ;
}

const totaldiscount = priceAfterDiscount(10 ,2);
console.log(totaldiscount);

const total5 = inventoryValue(totaldiscount , 3);

console.log(total5);