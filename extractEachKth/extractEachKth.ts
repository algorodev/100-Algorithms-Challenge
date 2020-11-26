function extractEachKth(inputArray: number[], k: number): number[] {
    return inputArray.filter((element, index) => (index + 1) % k !== 0);
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // DEVUELVE [ 1, 2, 4, 5, 7, 8, 10 ]
console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)); // DEVUELVE [ 1, 3, 5, 7, 9 ]
console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)); // DEVUELVE [ 1, 2, 3, 5, 6, 7, 9, 10 ]
console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // DEVUELVE [ 1, 2, 3, 4, 6, 7, 8, 9 ]
