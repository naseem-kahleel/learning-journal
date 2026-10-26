let quantityofSticker = 6;
let quantityofBadge = 7;
let quantityofNotebook = 8;

function showProduct(productName) {

    console.log("Product: " + productName)
}

showProduct("Sticker");
showProduct("Badge");
showProduct("Notebook");

function showStock(productName, quantity) {

    console.log("Product: " + (productName) + " The Quantity: " + quantity)
}

showStock("Sticker" , quantityofSticker );
showStock("Badge" , quantityofBadge);
showStock("Notebook" , quantityofNotebook);

function showsalemessage(saleproduct , quantity , salequantity){

    if (( quantity - salequantity ) >= 0 ) {

        let remainStock = quantity - salequantity 
        console.log(remainStock)
        quantity = remainStock;
    }

    else {

        console.log("Out of stock")
    }
}
    showsalemessage("Notebook" , quantityofNotebook , 6)
    showStock("Notebook" , quantityofNotebook);

