function electionWinners(votes: number[], voters: number): number {
    let inTheRunning: number = 0;
    const mostVotes = Math.max(...votes);
    const sortedVotes = votes.sort((a, b) => b - a);
    if (sortedVotes[0] !== sortedVotes[1] && voters === 0) {
        return 1;
    }
    votes.forEach((voteCount) => {
        if (mostVotes - voteCount < voters) {
            inTheRunning ++;
        }
    })
    return inTheRunning;
}

console.log(electionWinners([1, 2, 4, 2, 1], 3)); // PUEDE GANAR EL TERCERO
console.log(electionWinners([1, 2, 3, 2, 1], 1)); // PUEDE GANAR EL PRIMERO
console.log(electionWinners([1, 3, 3, 2, 2], 1)); // PUEDE GANAR EL SEGUNDO
console.log(electionWinners([3, 2, 4, 2, 1], 3)); // PUEDE GANAR EL CUARTO
