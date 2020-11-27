function houseOfCats(legs: number): number[] {
    const peopleCount: number[] = [];
    while (legs >= 0) {
        peopleCount.unshift(legs/2);
        legs -= 4;
    }
    return peopleCount;
}

console.log(houseOfCats(6)); // DEVUELVE [ 1, 3 ]
console.log(houseOfCats(12)); // DEVUELVE [ 0, 2, 4, 6 ]
console.log(houseOfCats(8)); // DEVUELVE [ 0, 2, 4 ]
console.log(houseOfCats(20)); // DEVUELVE [ 0, 2, 4, 6, 8, 10 ]
