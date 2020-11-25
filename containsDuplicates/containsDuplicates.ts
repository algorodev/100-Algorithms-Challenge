function containsDuplicates(inputArray: number[]): boolean {
    inputArray = inputArray.sort((a, b) => a - b);
    for (let i = 0; i < inputArray.length; i ++) {
        if (inputArray[i] === inputArray[i + 1]) {
            return true;
        }
    }
    return false;
}

console.log(containsDuplicates([1, 2, 3, 1])); // DEVUELVE TRUE
console.log(containsDuplicates([1, 2, 3])); // DEVUELVE FALSE
console.log(containsDuplicates([1, 2, 3, 2])); // DEVUELVE TRUE
console.log(containsDuplicates([3, 1])); // DEVUELVE FALSE
