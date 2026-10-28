function inventoryValue(price , qunatity){

    return price * qunatity;
}


function reStock(stock , deliveryQuantity){

    return stock + deliveryQuantity;
}

function stockAfterSale(currentStock) {
    if (currentStock > 0) {
        return currentStock - 1;
    } else {
        return 0;
    }
}

let penPrice = 4;
let penStock = 3;
console.log("Pen")
console.log("inventory value: " + (inventoryValue(penPrice , penStock)))

if (penStock > 0){

    console.log("seccessful sale")
    penStock = stockAfterSale(penStock)
}

else {

    console.log("Out of stock")
}

console.log("Remaining stock: " + penStock + " Final value: " + (inventoryValue(penPrice , penStock)))

let folderPrice = 7;
let folderStock = 6;

console.log("Folder")
console.log("Inventory value: " + (inventoryValue(folderPrice , folderStock)))


if (folderStock > 0){

    console.log("seccessful sale")
    folderStock = stockAfterSale(folderStock)
}

else {

    console.log("Out of stock")
}

console.log("Remaining stock: " + folderStock + " Final value: " + (inventoryValue(folderPrice , folderStock)) )

console.log("New stock after restock Pen: "+ reStock(penStock , 3))
console.log("New stock after restock Folder: " + reStock(folderStock , 3))





