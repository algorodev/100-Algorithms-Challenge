function evenDigitsOnly(n: number): boolean {
    const digits = n.toString().split('');
    return digits.every((digit) => parseInt(digit) % 2 === 0);
}

console.log(evenDigitsOnly(24680)); // DEVUELVE TRUE
console.log(evenDigitsOnly(13579)); // DEVUELVE FALSE
console.log(evenDigitsOnly(12345)); // DEVUELVE FALSE
console.log(evenDigitsOnly(24681)); // DEVUELVE FALSE
