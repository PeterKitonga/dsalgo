const addUpToFirst = (n) => {
    let total = 0;

    for (let index = 1; index <= n; index++) {
        total += index;
    }

    return total;
};

const addUpToSecond = (n) => {
    return n * (n + 1) / 2;
};

/* ============= TIMING ============= */ 

let time_one = performance.now();
addUpToFirst(1000000000);
let time_two = performance.now();
console.log(`Example One Time Elapsed: ${(time_two - time_one) / 1000} seconds.`);

let time_three = performance.now();
addUpToSecond(1000000000);
let time_four = performance.now();
console.log(`Example Two Time Elapsed: ${(time_four - time_three) / 1000} seconds.`);