function factorializeANumber(n: number): number {
    let total = 1;
    for (let i = 1; i <= n; i ++) {
        total *= i;
    }
    return total;
}

console.log(factorializeANumber(5)); // DEVUELVE 120
console.log(factorializeANumber(8)); // DEVUELVE 40320
console.log(factorializeANumber(10)); // DEVUELVE 3628800
console.log(factorializeANumber(26)); // DEVUELVE 4.0329146112660565e+26
