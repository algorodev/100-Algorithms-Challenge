function confirmEnding(str: string, target: string): boolean {
    const start = str.length - target.length;
    return str.substr(start, str.length) === target;
}

console.log(confirmEnding("Reaction", "action")); // DEVUELVE TRUE
console.log(confirmEnding("Library", "rary")); // DEVUELVE TRUE
console.log(confirmEnding("Palindrome", "obliome")); // DEVUELVE FALSE
console.log(confirmEnding("Open Sesame", "pen"));// DEVUELVE FALSE
