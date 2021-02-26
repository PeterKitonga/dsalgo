/**
 * Write a function called 'countDown', which accepts an integer to be countdown to 0.
*/
const countDown = (num) => {
    // checks wether the recursion has reached the base case
    if (num <= 0) {
        return 'Done';
    }

    // placed just to show case the different inputs
    console.log(`'Countdown input': ${num}`);

    // decrement the input by 1
    num--;

    // pass the modified input to the recursive call
    return countDown(num);
}

/**
 * Write a function called 'sumRange', which accepts an integer num. The function should return the sum
 * of numbers in the range between 1 to the integer passed.
*/
const sumRange = (num) => {
    // base case
    if (num === 1) {
        return 1;
    }

    // each recursive call will return a value up the call stack to the first return
    return num + sumRange(num - 1);
}

/**
 * Write a function called 'factorialNum', that returns the multiplication of all numbers between 1 and num.
*/
const factorialNum = (num) => {
    if (num <= 1) {
        return 1;
    }

    return num * factorialNum(num - 1);
}

/**
 * Write a function called 'collectOddValues', that returns odd numbers from an array.
*/
const collectOddValuesOne = (arr) => {
    // initialize an array to house the results(odd numbers)
    let result = [];

    const helper = (helperInput) => {
        // base case condition
        if (helperInput.length === 0) {
            return result;
        }

        // check if number is odd, modulus 2 will give remainder
        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        // remove the first item in the array
        helperInput.splice(0, 1);

        // pass new array to recursive call
        return helper(helperInput);
    }

    helper(arr);

    return result;
}

const collectOddValuesTwo = (arr) => {
    // initialize an array to house the results(odd numbers)
    let result = [];

    // base case condition
    if (arr.length === 0) {
        return result;
    }

    // check if first item in the array is odd
    if (arr[0] % 2 !== 0) {
        result.push(arr[0]);
    }

    /**
     * Here we merge the result array to the return value of the recursive call.
     * 
     * This is the same as: result = result.concat(collectOddValuesTwo(arr.slice(1)));
    */
    result = [...result, ...collectOddValuesTwo(arr.slice(1))];

    return result;
}

/* ============= TIMING ============= */ 

console.log(`'countDown(6)': ${countDown(6)}`);

console.log(`'sumRange(3)': ${sumRange(3)}`);

console.log(`'factorialNum(4)': ${factorialNum(4)}`);

console.log(`'collectOddValuesOne([1, 2, 3, 4, 5, 6, 7, 8, 9])': ${JSON.stringify(collectOddValuesOne([1, 2, 3, 4, 5, 6, 7, 8, 9]))}`);

console.log(`'collectOddValuesTwo([1, 2, 3, 4, 5, 6, 7, 8, 9])': ${JSON.stringify(collectOddValuesTwo([1, 2, 3, 4, 5, 6, 7, 8, 9]))}`);