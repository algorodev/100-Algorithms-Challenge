function chunkyMonkey(inputArray: any[], length: number): any[][] {
    const nested = [];
    let count = 0;
    while (count < inputArray.length) {
        nested.push(inputArray.slice(count, count += length));
    }
    return nested;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2)); // DEVUELVE [ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(chunkyMonkey([1, 2, 1, 2], 2)); // DEVUELVE [ [ 1, 2 ], [ 1, 2 ] ]
console.log(chunkyMonkey(["a", "b", "c", "d", "e", "f"], 2)); // DEVUELVE [ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e', 'f' ] ]
console.log(chunkyMonkey(["a", "b", "c", "d", "e", "f"], 3)); // DEVUELVE [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
console.log(chunkyMonkey([1, 2, 1, 2, 2, 1], 4)); // DEVUELVE [ [ 1, 2, 1, 2 ], [ 2, 1 ] ]
