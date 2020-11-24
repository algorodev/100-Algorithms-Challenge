function characterParity(symbol: string): string {
    const result = parseInt(symbol);
    return isNaN(result) ? 'letra' : result % 2 === 0 ? 'par' : 'impar';
}

console.log(characterParity('5')); // 'IMPAR'
console.log(characterParity('q')); // 'LETRA'
console.log(characterParity('-1')); // 'IMPAR'
console.log(characterParity('10')); // 'PAR'
