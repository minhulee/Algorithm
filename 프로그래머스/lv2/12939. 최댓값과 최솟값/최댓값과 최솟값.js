function solution(s) {
    const sorted = s.split(" ").map(el => parseInt(el)).sort((a, b) => a - b);
    return `${sorted[0]} ${sorted[sorted.length - 1]}`;
}