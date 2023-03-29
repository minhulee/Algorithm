function solution(n) {
    return new Array(n).fill(0).map((el, idx) => el + idx + 1).filter((el) => n % el === 0);
}