function solution(start, end) {
    return new Array(start-end+1).fill(0).map((e, i) => e = start-i);
}