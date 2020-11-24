function composeRanges(nums: number[]): string[] {
    if (nums.length < 1) {
        return [];
    }
    const ranges: any[] = [{start: nums[0], end: nums[0]}];
    for (let i = 1; i < nums.length; i ++) {
        if (ranges[ranges.length - 1].end + 1 === nums[i]) {
            ranges[ranges.length - 1].end = nums[i];
        } else {
            ranges.push({start: nums[i], end: nums[i]});
        }
    }
    for (let i = 0; i < ranges.length; i ++) {
        if (ranges[i].start !== ranges[i].end) {
            ranges[i] = `${ranges[i].start}->${ranges[i].end}`;
        } else {
            ranges[i] = ranges[i].start.toString();
        }
    }
    return ranges;
}

console.log(composeRanges([-1, 0, 1, 3, 4, 5, 8, 9])); // DEVUELVE [ '-1->1', '3->5', '8->9' ]
console.log(composeRanges([-1, 0, 1, 2, 4, 5, 9])); // DEVUELVE [ '-1->2', '4->5', '9' ]
console.log(composeRanges([-1, 0, 1, 4, 5, 9, 10, 11])); // DEVUELVE [ '-1->1', '4->5', '9->11' ]
console.log(composeRanges([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); // DEVUELVE [ '-1->9' ]
