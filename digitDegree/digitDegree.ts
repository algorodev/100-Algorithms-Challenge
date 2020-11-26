function digitDegree(n: number): number {
    let count = 0;
    let currentNumber = n;
    if (n <= 9) {
        return count;
    } else {
        while (true) {
            count ++;
            currentNumber = getDigit(currentNumber);
            if (currentNumber <= 9) {
                break;
            }
        }
    }
    return count;
}

function getDigit(num: number): number {
    const nums: number[] = num.toString().split('').map((element) => parseInt(element));
    return nums.reduce((a, b) => {
        return a + b;
    })
}

console.log(digitDegree(5)); // DEVUELVE 0
console.log(digitDegree(510)); // DEVUELVE 1
console.log(digitDegree(100)); // DEVUELVE 1
console.log(digitDegree(864)); // DEVUELVE 2
