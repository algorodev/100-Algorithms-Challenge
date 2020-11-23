function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxDiff = Math.abs(inputArray[0] - inputArray[1]);
    for (let i = 0; i < inputArray.length; i ++) {
        let absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);
        maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
    }
    return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 8, 1])); // DEVUELVE UN 7
console.log(arrayMaximalAdjacentDifference([7, 2, 8, 5])); // DEVUELVE UN 6
console.log(arrayMaximalAdjacentDifference([10, 3, 6, 9])); // DEVUELVE UN 7
console.log(arrayMaximalAdjacentDifference([1, 5, 7, 2])); // DEVUELVE UN 5
