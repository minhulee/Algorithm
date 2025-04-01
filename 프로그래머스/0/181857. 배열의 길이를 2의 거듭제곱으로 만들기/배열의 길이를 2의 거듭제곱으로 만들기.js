function solution(arr) {
    let len = 0;
    while (Math.pow(2, len) < arr.length) len++;
    return [...arr, ...Array(Math.pow(2, len) - arr.length).fill(0)];
}