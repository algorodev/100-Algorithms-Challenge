function allLongestStrings(stringArray: string[]): string[] {
    let longestLength = 0;
    const longestWords = [];
    stringArray.forEach((word: string) => {
        longestLength = longestLength < word.length ? word.length : longestLength;
    });
    stringArray.forEach((word: string) => {
        if (word.length === longestLength) {
            longestWords.push(word);
        }
    })
    return longestWords;
}

console.log(allLongestStrings(["hola", "que", "tal", "estas", "amigo"])); // DEVUELVE [ 'estas', 'amigo' ]
console.log(allLongestStrings(["rojo", "azul", "verde", "naranja", "amarillo", "violeta"])); // DEVUELVE [ 'amarillo' ]
console.log(allLongestStrings(["bici", "moto", "carro", "coche", "metro"])); // DEVUELVE [ 'carro', 'coche', 'metro' ]
console.log(allLongestStrings(["caballo", "leon", "tigre", "lagarto", "girafa"])); // DEVUELVE [ 'caballo', 'lagarto' ]
