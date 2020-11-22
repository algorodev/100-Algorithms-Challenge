function alphabeticSubSequence(s: string): boolean {
    const chars: string[] = s.split('');
    const charValues: number[] = [];
    chars.forEach((char: string) => {
        charValues.push(char.charCodeAt(0));
    });
    if (new Set(charValues).size !== charValues.length) {
        return false;
    }
    for (let i = 0; i < charValues.length; i ++) {
        if (charValues[i] >= charValues[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(alphabeticSubSequence('effg')); // DEVUELVE FALSE
console.log(alphabeticSubSequence('abcd')); // DEVUELVE TRUE
console.log(alphabeticSubSequence('acgm')); // DEVUELVE TRUE
console.log(alphabeticSubSequence('gkbz')); // DEVUELVE FALSE
