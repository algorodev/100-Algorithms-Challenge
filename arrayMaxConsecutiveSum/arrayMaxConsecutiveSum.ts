function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let sum = 0;
    let max = 0;
    for (let i = 0; i < k; i ++) {
        sum += inputArray[i];
    }
    max = sum;
    for (let i = k; i < inputArray.length; i ++) {
        sum -= inputArray[i - k];
        sum += inputArray[i];
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2)); // DEVUELVE UN 8
console.log(arrayMaxConsecutiveSum([6, 7, 3, 9, 1], 2)); // DEVUELVE UN 13
console.log(arrayMaxConsecutiveSum([8, 3, 6, 2, 2], 2)); // DEVUELVE UN 11
console.log(arrayMaxConsecutiveSum([3, 1, 7, 9, 3], 2)); // DEVUELVE UN 16
