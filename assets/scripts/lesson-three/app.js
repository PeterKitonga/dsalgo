const charCount = (string) => {
    // make object to return at end
    const result = {};
    
    // convert string to lowercase
    string = string.toLowerCase();
    
    // loop over string
    for(let char of string) {
        // if the char is something else(space, period, e.t.c.) don't do anything (DIFFICULT PART INCORPORATE BACK)
        /**
        * Here, we have refactored to a function that checks the character code of each character and verifies
        * if it is alphanumeric. We do this because regular expressions tend to be slower in execution
        */
        if(isAlphaNumeric(char)) {
            // Refactored from if...else statement
            result[char] = ++result[char] || 1;
        }
    }
    
    // return an object with keys that are lowercase alphanumeric characters
    return result;
};

const isAlphaNumeric = (char) => {
    let code = char.charCodeAt(0);
    
    if (!(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    } else {
        return true;
    }
}

let time_one = performance.now();
console.log(charCount('Your PIN number is 1234!'));
let time_two = performance.now();
console.log(`Example One Time Elapsed: ${(time_two - time_one) / 1000} seconds.`);