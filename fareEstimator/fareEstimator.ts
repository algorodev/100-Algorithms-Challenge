function fareEstimator(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {
    const fareCost: number[] = [];
    for (let i = 0; i < cost_per_mile.length; i ++) {
        fareCost.push(ride_time*cost_per_minute[i] + ride_distance*cost_per_mile[i]);
    }
    return fareCost;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5])); // DEVUELVE [ 13.700000000000001, 23.1, 28.099999999999998, 38 ]
console.log(fareEstimator(20, 8, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5])); // DEVUELVE [ 12.8, 21.4, 26.4, 37 ]
console.log(fareEstimator(60, 15, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5])); // DEVUELVE [ 28.5, 48, 58.5, 79.5 ]
console.log(fareEstimator(120, 40, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5])); // DEVUELVE [ 68, 114, 140, 194 ]
