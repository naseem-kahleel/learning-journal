let quantityOfSticker = 5;
let quantityOfBadge = 6;
let quantityOfNotebook = 7;
let stock = 0;


function showStock(productName , quantity){

    console.log(productName , quantity)
}

function showSaleMessage(stickerStock , badgeStock , Notebook){

    if ( stickerStock > 0 ){
        
        console.log("Sold one sticker!")

        quantityOfSticker-- ;
        console.log(quantityOfSticker)
    }

     if (badgeStock > 0){

        console.log("Sold one badge")

        quantityOfBadge--
        console.log(quantityOfBadge)
    }

     if (Notebook > 0){

        console.log("Sold one notebook")

        quantityOfNotebook--
        console.log(quantityOfNotebook)
    }

    else {

        console.log("Out of stock")
    }

    
}

showStock("Sticker" , 5);
showStock("Badge" , 6);
showStock("Notebook" , 7);

showSaleMessage(5 , 6 , 7)




