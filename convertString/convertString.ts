function convertString(string: string, friendString: string): boolean {
    let word = '';
    let friendIndex = 0;
    const stringChars: string[] = string.split('');
    for (let i = 0; i < string.length; i ++) {
        if (string[i] === friendString[friendIndex]) {
            word = word.concat(string[i]);
            friendIndex ++;
            if (word === friendString) {
                return true;
            }
        }
    }
    return false;
}

console.log(convertString("agjhdfjiuipfa", "adjup")); // RETURN TRUE
console.log(convertString("fasdfoafofsaftbafafll", "football")); // RETURN TRUE
console.log(convertString("aksjfñlaksf", "akat")); // RETURN FALSE
console.log(convertString("poyruqnbvjcl", "pointer")); // RETURN FALSE
