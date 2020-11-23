function arrayPreviousLess(inputArray: number[]): number[] {
    const lessThanList: number[] = [];
    for (let i = inputArray.length - 1; i >= 0; i --) {
        for (let j = i; j >= 0; j --) {
            if (inputArray[i] > inputArray[j]) {
                lessThanList.unshift(inputArray[j]);
                break;
            } else if (j === 0) {
                lessThanList.unshift(-1);
            }
        }
    }
    return lessThanList;
}

console.log(arrayPreviousLess([2, 4, 6, 8, 10])); // DEVUELVE [ -1, 2, 4, 6, 8 ]
console.log(arrayPreviousLess([5, 4, 3, 2, 1])); // DEVUELVE [ -1, -1, -1, -1, -1 ]
console.log(arrayPreviousLess([6, 8, 4, 8, 1])); // DEVUELVE [ -1, 6, -1, 4, -1 ]
console.log(arrayPreviousLess([5, 8, 3, 6, 1])); // DEVUELVE [ -1, 5, -1, 3, -1 ]
