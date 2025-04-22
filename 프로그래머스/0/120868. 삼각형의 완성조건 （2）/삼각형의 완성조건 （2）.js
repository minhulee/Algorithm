function solution(sides) {
    let max = Math.max(...sides);
    let min = Math.min(...sides);
    return ((max - (max - min)) + ((max + min) - (max + 1)));
}