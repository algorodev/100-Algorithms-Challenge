function circleOfNumbers(n: number, firstNumber: number): number {
    const numArray = [];
    const halfWay = n / 2;
    for (let i = 0; i < n; i ++) {
        numArray.push(i);
    }
    if (firstNumber < halfWay) {
        return numArray[firstNumber + halfWay];
    }
    return numArray[firstNumber - halfWay];
}

console.log(circleOfNumbers(10, 2)); // DEVUELVE UN 7
console.log(circleOfNumbers(10, 1)); // DEVUELVE UN 6
console.log(circleOfNumbers(20, 6)); // DEVUELVE UN 16
console.log(circleOfNumbers(30, 4)); // DEVUELVE UN 19
