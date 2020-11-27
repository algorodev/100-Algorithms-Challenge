function firstDigit(inputString: string): string {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < inputString.length; i ++) {
        if (digits.includes(inputString[i])) {
            return inputString[i];
        }
    }
}

console.log(firstDigit("qw3rty")); // DEVUELVE UN 3
console.log(firstDigit("f4n")); // DEVUELVE UN 4
console.log(firstDigit("h3y")); // DEVUELVE UN 3
console.log(firstDigit("0biusly")); // DEVUELVE UN 0
