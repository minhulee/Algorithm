function solution(arr) {
    return arr.every((l, i) => l.every((e, j) => e === arr[j][i])) ? 1: 0;
}