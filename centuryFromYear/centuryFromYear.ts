function centuryFromYear(year: number): number {
    const century = year / 100;
    if (year % 100 === 0) {
        return century;
    }
    return Math.floor(century) + 1;
    return;
}

console.log(centuryFromYear(2020)); // DEVUELVE 21
console.log(centuryFromYear(1990)); // DEVUELVE 20
console.log(centuryFromYear(1200)); // DEVUELVE 12
console.log(centuryFromYear(950)); // DEVUELVE 10
