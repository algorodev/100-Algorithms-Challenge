function candies(n: number, m: number): number {
    const candy = Math.floor(m / n);
    return candy * n;
}

console.log(candies(2, 10)); // DEVUELVE 10
console.log(candies(3, 10)); // DEVUELVE 9
console.log(candies(4, 10)); // DEVUELVE 8
console.log(candies(5, 10)); // DEVUELVE 10
