function firstDuplicate(a: number[]): number {
    const firstDup = {};
    for (let num of a) {
        if (firstDup.hasOwnProperty(num)) {
            return num;
        }
        firstDup[num] = num;
    }
    return -1;
}

console.log(firstDuplicate([1, 2, 1, 2])); // DEVUELVE 1
console.log(firstDuplicate([1, 2, 3, 4])); // DEVUELVE -1
console.log(firstDuplicate([1, 2, 0, 3, 1, 2])); // DEVUELVE 1
console.log(firstDuplicate([3, 4, 5, 6, 1, 2, 3])); // DEVUELVE 3
