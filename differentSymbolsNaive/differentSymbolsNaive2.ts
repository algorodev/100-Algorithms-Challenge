function differentSymbolsNaive2(s: string): number {
    const uniqueChars = {};
    const inputChars: string[] = s.split('');
    inputChars.forEach((char) => {
        uniqueChars[char] = 1;
    })
    return Object.keys(uniqueChars).length;
}

console.log(differentSymbolsNaive2("string")); // DEVUELVE UN 6
console.log(differentSymbolsNaive2("number")); // DEVUELVE UN 6
console.log(differentSymbolsNaive2("boolean")); // DEVUELVE UN 6
