function solution(x, n) {
    return new Array(n).fill(0).map((el, idx) => x + x * idx);
}