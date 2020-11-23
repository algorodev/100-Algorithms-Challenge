function arrayConversion(inputArray: number[]): number {
    let isOdd = true;
    while(inputArray.length !== 1) {
        inputArray = sumProduct(inputArray, isOdd);
        isOdd = !isOdd;
    }
    return inputArray[0];
}

function sumProduct(nums: number[], isOdd: boolean): number[] {
    const sumProducts: number[] = [];
    if (isOdd) {
        for (let i = 0; i < nums.length; i += 2) {
            sumProducts.push(nums[i] + nums[i + 1]);
        }
    } else {
        for (let i = 0; i < nums.length; i += 2) {
            sumProducts.push(nums[i] * nums[i + 1]);
        }
    }
    return sumProducts;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])); // DEVUELVE 186
console.log(arrayConversion([2, 4, 6, 8, 10, 12, 14, 16])); // DEVUELVE 744
console.log(arrayConversion([1, 3, 5, 7, 9, 11, 13, 15])); // DEVUELVE 608
console.log(arrayConversion([5, 10, 15, 20, 25, 30, 35, 40])); // DEVUELVE 4650
