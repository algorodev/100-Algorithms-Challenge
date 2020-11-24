function compareIntegers(a: string, b: string): string {
    const num1 = parseInt(a);
    const num2 = parseInt(b);
    return num1 > num2 ? 'mucho' : num1 < num2 ? 'poco' : 'iguales'
}

console.log(compareIntegers("190", "19")); // DEVUELVE MUCHO
console.log(compareIntegers("100", "100")); // DEVUELVE IGUALES
console.log(compareIntegers("19", "20")); // DEVUELVE POCO
console.log(compareIntegers("120", "12")); // DEVUELVE MUCHO
