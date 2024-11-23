test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test("1.07 dollars should be 156.5 yens", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromDollarToYen(1);
    // If 1.07 dollars are 156.5 yens, then 1 dollar should be 156.5 / 1.07
    const expected = 156.5 / 1.07; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(1)).toBeCloseTo(146.26); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("156.5 yens should be 0.87 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromYenToPound(300);
    // If 156.5 yens are 0.87 pounds, then 300 yens should be (300 * 0.87) / 156.5
    const expected = (300 * 0.87) / 156.5; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(300)).toBeCloseTo(1.667); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})