function encloseInBrackets(inputString: string): string {
    return `(${inputString})`;
}

console.log(encloseInBrackets("abracadabra")); // DEVUELVE (abracadabra)
console.log(encloseInBrackets("enclouser")); // DEVUELVE (enclouser)
console.log(encloseInBrackets("codemaster")); // DEVUELVE (codemaster)
console.log(encloseInBrackets("gaming")); // DEVUELVE (gaming)
