/* define your functions here */


function calculateTotal(quantity, price){
    return quantity * price;
}

function outputCartRow(item, total){
    document.write("<tr>" + 
                    "<td><img src='images/" + item.filename + "'></td>" + 
                    "<td>" + item.title + "</td>" +
                    "<td>" + total + "</td>" + 
                    "<td>" + item.price.toFixed(2) + "</td>" +
                    "<td>" + calculateTotal(total, item.price) + "</td>" + 
                    "</tr>");
}

function outputCalculation(items, tax, shipping){
    const subTotal = getSubTotal(items);
    document.write( "<tr class='totals'>" + 
                    "<td colspan='4'>Subtotal</td>" +
                    "<td>$" + subTotal.toFixed(2) + "</td>" + 
                    "</tr>" +
                    "<tr class='totals'>" +
                    "<td colspan='4'>Tax</td>" +
                    "<td>$" + tax.toFixed(2) + "</td>" +
                    "</tr>" + 
                    "<tr class='totals'>" +
                    "<td colspan='4'>Shipping</td>" +
                    "<td>$" + shipping.toFixed(2) + "</td>" +
                    "</tr>" +
                    "<tr class='totals'>" +
                    "<td colspan='4' class='focus'>Grand Total</td>" +
                    "<td class='focus'>$" + getGrandTotal(subTotal, tax, shipping).toFixed(2) + "</td>" +
                    "</tr>");
} 

function getSubTotal(items){
    let subTotal = 0;
    for(let i = 0; i < items.length; i++){
        subTotal += calculateTotal(items[i].quantity, items[i].product.price);
    }
    return subTotal;
}

function getGrandTotal(subTotal, tax, shipping) {
    return subTotal + tax + shipping;
}


        
