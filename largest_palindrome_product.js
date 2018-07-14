/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */

module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  if(digits === 1) {
    factor_0 = 9;
    factor_1 = 9;
  } else if(digits === 2) {
    factor_0 = 99;
    factor_1 = 99;
  } else if(digits === 3) {
    factor_0 = 999;
    factor_1 = 999;
  } else {
    console.log("Digit have to be 1, 2, or 3");
    return;
  }

  // Test palindromeNumber
  function isPal(number) {
    let num = number.toString();
    let numR = num.split("").reverse().join("");

    return num === numR
  }

  // Multiply factors in a loop
  function multiplyLoop(num0, num1) {
    for (let i = num0; i > 1; i--) { // Test
      for (let j = num1; j > 1; j--) { // Test
        palindromeNumber = i * j;
        
        if(isPal(palindromeNumber)) {
          factor_0 = i;
          factor_1 = j;

          console.log("product: ", palindromeNumber);
          console.log("factor0: ", factor_0);
          console.log("factor1: ", factor_1);

          return;
        }
      }    
    }
  }

  multiplyLoop(999, 999); // Test


  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};

/*
function largestPalin(n) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  if(n === 1) {
    factor_0 = 9;
    factor_1 = 9;
  } else if(n === 2) {
    factor_0 = 99;
    factor_1 = 99;
  } else if(n === 3) {
    factor_0 = 999;
    factor_1 = 999;
  } else {
    console.log("Digit have to be 1, 2, or 3");
    return;
  }

  // Test palindromeNumber
  function isPal(number) {
    let num = number.toString();
    let numR = num.split("").reverse().join("");

    return num === numR
  }

  // Multiply factors in a loop
  function multiplyLoop(num0, num1) {
    for (let i = num0; i > 900; i--) {
      for (let j = num1; j > 900; j--) {
        palindromeNumber = i * j;
        
        if(isPal(palindromeNumber)) {
          factor_0 = i;
          factor_1 = j;

          console.log("product: ", palindromeNumber);
          console.log("factor0: ", factor_0);
          console.log("factor1: ", factor_1);

          // return;
        }
      }    
    }
  }

  multiplyLoop(factor_0, factor_1);
}

largestPalin(3);
*/