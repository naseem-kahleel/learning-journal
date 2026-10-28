function inventoryValue(price, quantity) {
    return price * quantity;
}

function reStock(newStock, deliveryQuantity) {
    return newStock + deliveryQuantity;
}

function stockAfterSale(stockTicket) {
    if (stockTicket > 0) {
        return stockTicket - 1;
    } else {
        return 0;
    }
}

function canSell(stockTicket, requestedQuantity) {
    if (requestedQuantity > 0 && requestedQuantity <= stockTicket) {
        return true;
    } else {
        return false;
    }
}

let price = 8;
let stockTicket = 2;

console.log("The product is ticket");
console.log("The inventory value: " + inventoryValue(price, stockTicket));

if (stockTicket > 0) {
    console.log("Seccessful sale 1");
    stockTicket = stockAfterSale(stockTicket);
} else {
    console.log("Out of stock");
}
console.log("Remaining stock: " + stockTicket);

if (stockTicket > 0) {
    console.log("Seccessful sale 2");
    stockTicket = stockAfterSale(stockTicket);
} else {
    console.log("Out of stock");
}
console.log("Remaining stock: " + stockTicket);

if (stockTicket > 0) {
    console.log("Seccessful sale 3");
    stockTicket = stockAfterSale(stockTicket);
} else {
    console.log("Out of stock");
}
console.log("Remaining stock: " + stockTicket);

stockTicket = reStock(stockTicket, 2);
console.log("Restock the stock: " + stockTicket);

let requestedQuantity = 1;

if (canSell(stockTicket, requestedQuantity)) {
    console.log("Accept");
    stockTicket = stockTicket - requestedQuantity;
} else {
    console.log("Reject");
}

console.log("Remaining stock: " + stockTicket);