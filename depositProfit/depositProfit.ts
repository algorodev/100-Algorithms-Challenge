function depositProfit(deposit: number, rate: number, threshold: number): number {
    let year = 0;
    let account = deposit;
    while (threshold > account) {
        account += account * (rate / 100);
        year ++
    }
    return year;
}

console.log(depositProfit(100, 20, 170)); // DEVUELVE 3 AÑOS
console.log(depositProfit(50, 30, 1000)); // DEVUELVE 12 AÑOS
console.log(depositProfit(200, 25, 2000)); // DEVUELVE 11 AÑOS
console.log(depositProfit(15, 20, 1500)); // DEVUELVE 26 AÑOS
