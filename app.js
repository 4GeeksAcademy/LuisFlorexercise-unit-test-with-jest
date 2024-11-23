// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollars to euros
    let valueInEuro = valueInDollar / 1.07;
    // Convert the given valueInDollars to euros
    let valueInYens = valueInEuro * 156.5;
    // return the dollar value
    return valueInYens;
}

const fromYenToPound = function (valueInYen) {
    let valueInEuro = valueInYen / 156.5;
    // Convert the given valueInYens to euros
    let valueInPounds = valueInEuro * 0.87;
    // return the dollar value
    return valueInPounds;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };