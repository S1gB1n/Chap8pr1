
const tax_rate = parseFloat( prompt('Enter tax rate (0.10)') );
const shipping_threshold = parseFloat( prompt('Enter shipping threshold (1000)') );

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

document.write("<body>" +
               "<table class='table-fill'>");

document.write("<thead>" +
               "<tr>" + 
               "<th colspan='2'>Product</th>" +
               "<th>#</th>" +
               "<th>Price</th>" +
               "<th>Amount</th>" +
               "</tr>" + 
               "</thead>");

document.write("<tbody>");
for(let i = 0; i < cart.length; i++){
   outputCartRow(cart[i].product, cart[i].quantity);   
}
outputCalculation(cart, tax_rate, shipping_threshold);
document.write("</tbody>");
document.write("</table>" + 
               "</body>");