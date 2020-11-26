function fermactor(n: number): number[] {
    for (let i = 1; i < n; i ++) {
        for (let j = 1; j < i; j ++) {
            const total = i ** 2 - j ** 2;
            if (total === n) {
                return [i, j];
            }
        }
    }
}

console.log(fermactor(15)); // DEVUELVE [ 4, 1 ]
console.log(fermactor(32)); // DEVUELVE [ 6, 2 ]
console.log(fermactor(105)); // DEVUELVE [ 11, 4 ]
console.log(fermactor(305)); // DEVUELVE [ 33, 28 ]
