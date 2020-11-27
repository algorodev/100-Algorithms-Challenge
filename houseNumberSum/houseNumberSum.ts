function houseNumberSum(inputArray: number[]): number {
    let total: number = 0;
    for (let i = 0; i < inputArray.length; i ++) {
        if (inputArray[i] === 0) {
            return total;
        }
        total += inputArray[i];
    }
    return total;
}

console.log(houseNumberSum([1, 3, 4, 5, 0, 2, 1, 2])); // DEVUELVE 13
console.log(houseNumberSum([1, 3, 4, 2, 0, 2, 0, 2])); // DEVUELVE 10
console.log(houseNumberSum([1, 3, 0, 5, 0, 2, 1, 2])); // DEVUELVE 4
console.log(houseNumberSum([1, 3, 4, 5, 1, 2, 0, 2])); // DEVUELVE 16
