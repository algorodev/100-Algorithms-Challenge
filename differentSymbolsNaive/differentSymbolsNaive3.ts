function differentSymbolsNaive3(s: string): number {
    const uniqueChars = new Set();
    const inputChars: string[] = s.split('');
    inputChars.forEach((char) => {
        uniqueChars.add(char);
    })
    return uniqueChars.size;
}

console.log(differentSymbolsNaive3("string")); // DEVUELVE UN 6
console.log(differentSymbolsNaive3("number")); // DEVUELVE UN 6
console.log(differentSymbolsNaive3("boolean")); // DEVUELVE UN 6
