function fancyRide(I: number, fares: number[]): string {
    const rides: string[] = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];
    for (let i = fares.length - 1; i >= 0; i --) {
        if (fares[i] * I <= 20) {
            return rides[i];
        }
    }
    return;
}

console.log(fancyRide(30, [0.1, 0.3, 0.5, 0.7, 1, 1.3])); // DEVUELVE 'UberPlus'
console.log(fancyRide(20, [0.1, 0.3, 0.5, 0.7, 1, 1.3])); // DEVUELVE 'UberSUV'
console.log(fancyRide(25, [0.1, 0.3, 0.5, 0.7, 1, 1.3])); // DEVUELVE 'UberBlack'
console.log(fancyRide(50, [0.1, 0.3, 0.5, 0.7, 1, 1.3])); // DEVUELVE 'UberXL'
