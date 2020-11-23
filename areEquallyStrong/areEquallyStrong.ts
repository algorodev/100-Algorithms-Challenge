function areEquallyStrong(userLeft: number, userRight: number, friendLeft: number, friendRight: number): boolean {
    const userWeakest = userLeft <= userRight ? userLeft : userRight;
    const userStrongest = userLeft >= userRight ? userLeft : userRight;
    const friendWeakest = friendLeft <= friendRight ? friendLeft : friendRight;
    const friendStrongest = friendLeft >= friendRight ? friendLeft : friendRight;
    return userStrongest === friendStrongest && userWeakest === friendWeakest;
}

console.log(areEquallyStrong(10, 15, 15, 10)); // DEVUELVE TRUE
console.log(areEquallyStrong(15, 15, 15, 10)); // DEVUELVE FALSE
console.log(areEquallyStrong(10, 5, 15, 5)); // DEVUELVE FALSE
console.log(areEquallyStrong(10, 15, 10, 10)); // DEVUELVE FALSE
