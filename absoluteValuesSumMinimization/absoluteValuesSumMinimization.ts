function absoluteValuesSumMinimization(a: number[]): number {
    const isEven = a.length % 2 === 0;

    return isEven ? a[a.length / 2-1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7])); // DEVUELVE UN 4
console.log(absoluteValuesSumMinimization([4, 7, 10, 2])); // DEVUELVE UN 7
console.log(absoluteValuesSumMinimization([4, 10, 7, 2])); // DEVUELVE UN 10
console.log(absoluteValuesSumMinimization([3, 5, 1, 7, 2])); // DEVUELVE UN 1
