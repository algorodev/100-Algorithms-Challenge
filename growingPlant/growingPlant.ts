function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    let days = 0;
    let totalHeight = 0;
    while (totalHeight < desiredHeight) {
        days++;
        totalHeight += upSpeed;
        if (totalHeight < desiredHeight) {
            totalHeight -= downSpeed;
        }
    }
    return days;
}

console.log(growingPlant(100, 10, 910)); // DEVUELVE 10 DÍAS
console.log(growingPlant(100, 10, 400)); // DEVUELVE 5 DÍAS
console.log(growingPlant(100, 10, 2100)); // DEVUELVE 24 DÍAS
console.log(growingPlant(100, 10, 4500)); // DEVUELVE 50 DÍAS
