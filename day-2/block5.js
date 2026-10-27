let productName = "Notebook";
let Price = 6;
let Stock = 4;

function inventoryValue1( price , quantity){

    return price * quantity ;
}

 if ( Stock > 0) {

        console.log("Sold one")
        Stock-- ;
        console.log("Available at the stock " + Stock);
    }

    else {

        console.log("Out of stock");
    }

    function stockAfterSale(currentStock){

        currentStock = Price
        return currentStock * Stock;
        
    }

   

    console.log("The Prodcut name : " + productName + " Initial value: "+ inventoryValue1( 6 , 4));
    console.log("New value: " + stockAfterSale(Stock));

