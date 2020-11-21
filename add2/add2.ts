function add2(...sum: number[]): number {
    let total = 0;
    sum.forEach((num) => total +- num);
    return total;
}

console.log(add2(1, 2)); // DEVUELVE UN 3
console.log(add2(11, 4, 5, 6)); // DEVUELVE UN 26
console.log(add2(1, 2, 3, 4, 5)); // DEVUELVE UN 15
console.log(add2(17, 22, 43, 16, 17, 10, 21)); // DEVUELVE UN 146
