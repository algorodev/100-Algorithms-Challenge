function flattenArray(steamrollArray: any[]): any[] {
    const oneArray = [];
    flatten(steamrollArray)

    function flatten(arr: any[]) {
        arr.forEach((element) => {
            if (Array.isArray(element)) {
                flatten(element)
            } else {
                oneArray.push(element);
            }
        })
    }
    return oneArray;
}


console.log(flattenArray([["a"], [["b"]]])); // DEVUELVE [ 'a', 'b' ]
console.log(flattenArray([["a"], [["b"]], "c"])); // DEVUELVE [ 'a', 'b', 'c' ]
console.log(flattenArray([["a"], [["b"]], 2, [[1]], "c"])); // DEVUELVE [ 'a', 'b', 2, 1, 'c' ]
console.log(flattenArray([[[[["a"]]]], [["b"]], "c"])); // DEVUELVE [ 'a', 'b', 'c' ]
