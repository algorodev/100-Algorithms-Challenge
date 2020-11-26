function differentSymbolsNaive(s: string): number {
    const uniqueChars: string[] = [];
    const inputChars: string[] = s.split('');
    inputChars.forEach((char) => {
        if (!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        }
    })
    return uniqueChars.length;
}

console.log(differentSymbolsNaive("string")); // DEVUELVE UN 6
console.log(differentSymbolsNaive("number")); // DEVUELVE UN 6
console.log(differentSymbolsNaive("boolean")); // DEVUELVE UN 6
