function almostIncreasingSequence(sequence: number[]): boolean {
    let count = 0;
    for (let i = 0; i < sequence.length; i ++) {
        if (sequence[i] <= sequence[i - 1]) {
            count++;
            if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                return false;
            }
        }
    }
    return count <= 1;
}

console.log(almostIncreasingSequence([2, 4, 6])); // DEVUELVE TRUE PORQUE EL ARRAY ES INCREMENTAL DE PARES
console.log(almostIncreasingSequence([6, 4, 2])); // DEVUELVE FALSE PORQUE EL ARRAY ES DECREMENTAL DE PARES
console.log(almostIncreasingSequence([1, 3, 2, 1])); // DEVUELVE FALSE PROQUE NO SE PUEDE HACER UN ARRAY INCREMENTAL SOLO QUITANDO UN NUMERO
console.log(almostIncreasingSequence([2, 4, 5, 6])); // DEVUELVE TRUE PORQUE SI AL ARRAY LE QUITAS EL 2, QUEDA UN ARRAY INCREMENTAL
console.log(almostIncreasingSequence([3, 6, 9, 12])); // DEVUELVE TRUE PORQUE EL ARRAY ES INCREMENTAL DE MULTIPLOS DE 3
