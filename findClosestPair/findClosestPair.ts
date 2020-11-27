function findClosestPair(numbers: number[], sum: number): number {
    let distance = -1;
    for (let i = 0; i < numbers.length; i ++) {
        for (let j = 0; j < numbers.length - 1; j ++) {
            const distanceSum = numbers[i] + numbers[j];
            const absDistance = Math.abs(i - j);
            if (sum === distanceSum) {
                if (distance === -1 || absDistance < distance) {
                    distance = absDistance;
                }
            }
        }
    }
    return distance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5)); // DEVUELVE UN 2
console.log(findClosestPair([1, 2, 5, 6, 7, 2], 6)); // DEVUELVE UN 2
console.log(findClosestPair([1, 1, 3, 2, 6, 1], 5)); // DEVUELVE UN 1
console.log(findClosestPair([1, 2, 3, 4, 5, 6], 9)); // DEVUELVE UN 1
console.log(findClosestPair([1, 2, 0, 4, 1, 0], 7)); // DEVUELVE UN -1
