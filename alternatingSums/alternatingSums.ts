function alternatingSums(a: number[]): number[] {
    let evenSum = 0;
    let oddSum = 0;
    a.forEach((element, index) => {
        if (index % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    })
    return [evenSum, oddSum];
}

console.log(alternatingSums([90, 60, 90, 45, 30, 10])); // DEVUELVE [ 210, 115 ]
console.log(alternatingSums([10, 20, 45, 10, 15, 60])); // DEVUELVE [ 70, 90 ]
console.log(alternatingSums([2, 3, 5, 7, 1, 9])); // DEVUELVE [ 8, 19 ]
console.log(alternatingSums([9, 18, 36, 72, 12, 80])); // DEVUELVE [ 57, 170 ]
