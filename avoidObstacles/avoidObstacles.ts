function avoidObstacle(inputArray: number[]): number {
    inputArray = inputArray.sort((a, b) => a-b);
    const largestArrayVal = inputArray[inputArray.length -1];
    for (let i = 1; i <= largestArrayVal +1; i ++) {
        if (inputArray.every((element) => element % i !== 0)) {
            return i;
        }
    }
}

console.log(avoidObstacle([2, 4, 7, 9, 5])); // DEVUELVE UN 6
console.log(avoidObstacle([6, 3, 7, 8, 9])); // DEVUELVE UN 5
console.log(avoidObstacle([5, 3, 6, 7, 9])); // DEVUELVE UN 4
console.log(avoidObstacle([2, 5, 8, 11, 14])); // DEVUELVE UN 3
