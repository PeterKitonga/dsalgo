/**
 * Write a function called 'same', which accepts two arrays. 
 * The function should return true if every value in the array has it's corresponding value squared in the second array. 
 * The frequency of values must be the same.
*/
const sameOne = (array_one, array_two) => {
    // check if the lengths of the array match
    if(array_one.length !== array_two.length) {
        return false;
    }

    // loop through each item in array one
    for (let item of array_one) {
        // check if the square of item in array one exists in array two
        let index = array_two.indexOf(item ** 2);

        // if not found return false
        if (index === -1) {
            return false;
        }

        // remove the first item found and move to the next
        array_two.splice(index, 1);
    }

    return true;
};

const sameTwo = (array_one, array_two) => {
    // check if the lengths of the array match
    if(array_one.length !== array_two.length) {
        return false;
    }

    // initialize empty objects that will house the frequency of each array item
    let frequency_counter_one = {};
    let frequency_counter_two = {};

    // populates the first frequency counter
    for (let item_one of array_one) {
        frequency_counter_one[item_one] = ++frequency_counter_one[item_one] || 1;
    }

    // populates the second frequency counter
    for (let item_two of array_two) {
        frequency_counter_two[item_two] = ++frequency_counter_two[item_two] || 1;
    }

    // loop and check frequency of the squared value in array two
    for (let number in frequency_counter_one) {
        // check if the square of the value exists in the second frequency counter
        if(!(number ** 2 in frequency_counter_two)) {
            return false;
        }

        // check if frequency of the squared value matches
        if (frequency_counter_one[number] !== frequency_counter_two[number ** 2]) {
            return false;
        }
    }

    return true;
};

/**
 * Given two strings, write a function to determine if the second string is an anagram of the first. 
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*/
const validAnagram = (string_one, string_two) => {
    // check if the length of the strings match
    if (string_one.length !== string_two.length) {
        return false;
    }

    // create objects with frequency for each character
    let char_frequency_one = {};
    let char_frequency_two = {};

    for (let char_one of string_one) {
        char_frequency_one[char_one] = ++char_frequency_one[char_one] || 1;
    }

    for (let char_two of string_two) {
        char_frequency_two[char_two] = ++char_frequency_two[char_two] || 1;
    }

    // loop through each character
    for (let character in char_frequency_one) {
        // check if character in first object exists in second
        if (!char_frequency_two.hasOwnProperty(character)) {
            return false;
        }

        // check if frequency of character matches in the second object
        if (char_frequency_two[character] !== char_frequency_one[character]) {
            return false;
        }
    }

    return true;
}

/**
 * Given two strings, a and b, that may or may not be of the same length, determine the minimum number
 * of character deletions required to make a and b anagrams. Any characters can be deleted from either of the strings.
*/
const makeAnagram = (a, b) => {
    // create frequency counter objects for each character
    let frequency_counter_one = {};
    let frequency_counter_two = {};

    for (let char_one of a) {
        frequency_counter_one[char_one] = ++frequency_counter_one[char_one] || 1
    }

    for (let char_two of b) {
        frequency_counter_two[char_two] = ++frequency_counter_two[char_two] || 1
    }

    // initialize counter for deletions
    let deletions = 0;

    // Loop through the first object
    for (let character in frequency_counter_one) {
        // check if char doesn't exist in second object, increament deletions counter
        if (!frequency_counter_two.hasOwnProperty(character)) {
            deletions += frequency_counter_one[character];
        } else {
            // if character frequency does not match, subtract both frequencies to get deletions
            if (frequency_counter_one[character] !== frequency_counter_two[character]) {
                deletions += Math.abs(frequency_counter_one[character] - frequency_counter_two[character]);
            }
        }
    }

    // Loop through the second object
    for (let character in frequency_counter_two) {
        // check if char doesn't exist in second object, increament deletions counter
        if (!frequency_counter_one.hasOwnProperty(character)) {
            deletions += frequency_counter_two[character];
        }
    }

    return deletions;
}

/**
 * Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
*/
const sumZeroOne = (arr) => {
    // loop through each item in the array
    for (let i = 0; i < arr.length; i++) {
        // get the current value and loop through the rest while testing condition
        for (let j = i + 1; j < arr.length; j++) {
            // if current value i plus current value j equals 0, return pair
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

const sumZeroTwo = (arr) => {
    // initialize the left and right indices
    let left = 0;
    let right = arr.length - 1;

    // loop through each item in the array while the left index is less than the right
    while (left < right) {
        /**
         * Get the current left value and sum the current right value. 
         * If sum equals 0, return pair
        */
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            // decrement right index if sum is greater than 1
            right--;
        } else {
            // increment left index if sum is less than 1
            left++;
        }
    }        
}

/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
*/
const countUniqueValuesOne = (arr) => {
    // check length of the array, return 0 if empty
    if (arr.length === 0) {
        return 0;
    }

    // initialize array for unique values
    const unique = [];

    // loop through each item in array
    for (let index = 0; index < arr.length; index++) {
        // push values if not in array
        if (!unique.includes(arr[index])) {
            unique.push(arr[index])
        }
    }

    return unique.length;
}

const countUniqueValuesTwo = (arr) => {
    // check length of the array, return 0 if empty
    if (arr.length === 0) {
        return 0;
    }

    // initialize a counter
    let counter = 0;

    // loop through each value starting from index 1
    for (let index = 1; index < arr.length; index++) {
        // compare value at index with at counter, if not same increment counter and update arr at index counter
        if (arr[counter] !== arr[index]) {
            counter++;
            arr[counter] = arr[index];
        }
    }

    // return counter plus 1 
    return counter + 1;
}

/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
*/
const maxSubarraySumOne = (arr, num) => {
    // check the length of the array
    if (num > arr.length) {
        return null;
    }

    // initialize a max store
    let max = -1;

    // loop through values to length minus num plus one
    for (let i = 0; i < arr.length - (num + 1); i++) {
        // initialize a temp sum for the max store of each set
        let temp = 0;

        // loop to the numth value from current index
        for (let j = 0; j < num; j++) {
            // increment the temp sum for this set
            temp += arr[i + j];

            // check if the temp sum is greater than max store, equate max to temp if greater
            if(temp > max) {
                max = temp;
            }
        }
    }

    // return max
    return max;
}

const maxSubarraySumTwo = (arr, num) => {
    // check length of array
    if (num > arr.length) {
        return null;
    }

    // initialize the temp and max store
    let temp = 0;
    let max = 0;

    // add the first numth values and set max store
    for (let i = 0; i < num; i++) {
        max += arr[i];
    }

    // set temp store same as max 
    temp = max;

    // loop through values starting from numth index
    for (let i = num; i < arr.length; i++) {
        // update temp store by removing the (index - num) value and adding the current index value
        temp = temp - arr[i - num] + arr[i];
        // if temp store is greater than max, update max
        if (temp > max) {
            max = temp;
        }
    }

    // return max
    return max;
}

/**
 * Given a sorted array of integers, write a function called search, that accepts a value and returns the 
 * index where the value passed to the function is located. If the value is not found, return -1.
*/
const searchOne = (arr, num) => {
    // initialize result to -1, this will be the result if value is not found
    let result = -1;

    // loop through each value and check if equates to num
    for (let i = 0; i < arr.length; i++) {
        // if num is found, return index
        if (arr[i] === num) {
            return i;
        }
    }

    return result;
}

const searchTwo = (arr, num) => {
    // initialize min and max values for our iteration
    let min = 0;
    let max = arr.length - 1;

    // iterate within the bounds of min and max
    while(min <= max) {
        // set the middle of the array
        let middle = Math.floor((max + min) / 2);

        // check if the middle value is greater than the num
        if (arr[middle] > num) {
            // if greater than num, decrement middle by one and set to max
            max = middle - 1;
        } else if (arr[middle] < num) {
            // if less than num, increment min by one
            min = middle + 1;
        } else {
            // if equal to num, return middle
            return middle;
        }
    }

    // return -1 if not found
    return -1;
}

/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
*/
const sameFrequency = (first, second) => {
    // check if length of both numbers as strings is equal
    if (first.toString().length !== second.toString().length) {
        return false;
    }

    // create frequencies for each digit in both numbers
    let first_frequency = {};
    let second_frequency = {};

    for (let value of first.toString()) {
        first_frequency[value] = ++first_frequency[value] || 1;
    }
    
    for (let value of second.toString()) {
        second_frequency[value] = ++second_frequency[value] || 1;
    }

    // loop through first frequency counter
    for (let value in first_frequency) {
        // check if digit exists, if not return false
        if (!second_frequency.hasOwnProperty(value)) {
            return false;
        }

        // if exists check frequencies, if matched return true
        if (first_frequency[value] !== second_frequency[value]) {
            return false;
        }
    }

    return true;
}

/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates
 * among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/
const areThereDuplicates = (...params) => {
    // check if any arguement is passed, return false if none is passed
    if (params.length === 0) {
        return false;
    }

    // initalize frequency counter
    let look_up = {};

    // create frequency counter
    for (let arg of params) {
        look_up[arg] = ++look_up[arg] || 1;
    }

    // loop through frequency counter
    for (let value in look_up) {
        // check if any value has a frequency greater than one
        if (look_up[value] > 1) {
            return true;
        }
    }

    return false;
}

/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates
 * among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/


/* ============= TIMING ============= */ 

console.log(`'sameOne([1, 2, 3, 2, 5], [4, 1, 4, 9, 11])': ${sameOne([1, 2, 3, 2, 5], [4, 1, 4, 9, 11])}`);

console.log(`'sameTwo([1, 2, 3, 2, 5], [4, 1, 4, 9, 11])': ${sameTwo([1, 2, 3, 2, 5], [4, 1, 4, 9, 11])}`);

console.log(`'validAnagram('texttwisttime', 'timetwisttext')': ${validAnagram('texttwisttime', 'timetwisttext')}`);

console.log(`'makeAnagram('accfgilmmnrsvwxxyyyz', 'bbdeeghhijjklmmmooppqrrstuvwwx')': ${makeAnagram('accfgilmmnrsvwxxyyyz', 'bbdeeghhijjklmmmooppqrrstuvwwx')}`);

console.log(`'sumZeroOne([-3,-2,-1,0,1,2,3])': ${JSON.stringify(sumZeroOne([-3,-2,-1,0,1,2,3]))}`);

console.log(`'sumZeroTwo([-3,-2,-1,0,1,2,3])': ${JSON.stringify(sumZeroTwo([-3,-2,-1,0,1,2,3]))}`);

console.log(`'countUniqueValuesOne([1,2,3,4,4,4,7,7,12,12,13])': ${countUniqueValuesOne([1,2,3,4,4,4,7,7,12,12,13])}`);

console.log(`'countUniqueValuesTwo([1,2,3,4,4,4,7,7,12,12,13])': ${countUniqueValuesTwo([1,2,3,4,4,4,7,7,12,12,13])}`);

console.log(`'maxSubarraySumOne([1,2,5,2,8,1,5], 2)': ${maxSubarraySumOne([1,2,5,2,8,1,5], 2)}`);

console.log(`'maxSubarraySumTwo([1,2,5,2,8,1,5], 4)': ${maxSubarraySumTwo([1,2,5,2,8,1,5], 4)}`);

console.log(`'searchOne([1,2,3,4,5,6], 4)': ${searchOne([1,2,3,4,5,6], 4)}`);

console.log(`'searchTwo([1,2,3,4,5,6], 6)': ${searchTwo([1,2,3,4,5,6], 6)}`);

console.log(`'sameFrequency(3589578, 5879385)': ${sameFrequency(3589578, 5879385)}`);

console.log(`'areThereDuplicates(1, 2, 2, 3)': ${areThereDuplicates(1, 2, 2, 3)}`);