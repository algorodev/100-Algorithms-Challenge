function adjacentElementsProduct(numArray: number[]): number {
    let largestProduct = numArray[0] * numArray[1];
    for (let i = 1; i < numArray.length - 1; i ++) {
        const product = numArray[i] * numArray[i + 1];
        largestProduct = largestProduct < product ? product : largestProduct;
    }
    return largestProduct;
}

console.log(adjacentElementsProduct([3,5,5,4,7,3])); // DEVUELVE 28
console.log(adjacentElementsProduct([4,5,5,9,2,1])); // DEVUELVE 45
console.log(adjacentElementsProduct([3,3,1,5,7,6])); // DEVUELVE 42
console.log(adjacentElementsProduct([3,1,5,8,7,9])); // DEVUELVE 63
