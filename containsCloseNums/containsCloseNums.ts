function containsCloseNums(nums: number[], k: number): boolean {
    for (let i = 0; i < nums.length; i ++) {
        for (let j = 0; j < nums.length; j ++) {
            if (i !== j) {
                if (nums[i] === nums[j]) {
                    if (Math.abs(i - j) <= k) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2)); // DEVUELVE FALSE
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3)); // DEVUELVE TRUE
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 5)); // DEVUELVE TRUE
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 4)); // DEVUELVE TRUE
