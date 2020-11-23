function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    inputArray.forEach((element, index) => {
        if (element === elemToReplace) {
            inputArray[index] = substitutionElem;
        }
    })
    return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3)); // DEVUELVE [ 3, 2, 3 ]
console.log(arrayReplace([2, 2, 8, 2, 1], 2, 9)); // DEVUELVE [ 9, 9, 8, 9, 1 ]
console.log(arrayReplace([3, 5, 8, 1], 1, 0)); // DEVUELVE [ 3, 5, 8, 0 ]
console.log(arrayReplace([8, 6, 7, 8], 8, 1)); // DEVUELVE [ 1, 6, 7, 1 ]
