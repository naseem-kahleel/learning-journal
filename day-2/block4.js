function stockAfterSale(cerrentStock) {

    if(cerrentStock > 0) {

        return cerrentStock - 1;
    }

    else {

        return 0;
    }
}

    let stock = 2;

    stock = stockAfterSale(stock)
    console.log(stock);

    stock = stockAfterSale(stock)
    console.log(stock);
    
    stock = stockAfterSale(stock)
    console.log(stock);