//Create a function expression named formatCurrency that takes two parameters: amount and currency. Return a string that formats the amount with the currency symbol (e.g., "$100" or "€100").

const formatCurrency=function(amount,currency){
    switch(currency){
        case "rupee":
            return "₹"+amount;

             case "usd":
            return "$"+amount;

             case "euro":
            return "#"+amount;

            default:
                return "Invalid currency";
    }
}
console.log(formatCurrency(30,"rupee"));
console.log(formatCurrency(4,"usd"));
console.log(formatCurrency(45,"euro"));
console.log(formatCurrency(30,"doller"));