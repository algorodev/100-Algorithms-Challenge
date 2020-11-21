function addTwoDigits(n: any): number {
    const nums = n.toString().split('');
    return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addTwoDigits(11)); // DEVUELVE 2
console.log(addTwoDigits(22)); // DEVUELVE 4
console.log(addTwoDigits(78)); // DEVUELVE 15
console.log(addTwoDigits(21)); // DEVUELVE 3
