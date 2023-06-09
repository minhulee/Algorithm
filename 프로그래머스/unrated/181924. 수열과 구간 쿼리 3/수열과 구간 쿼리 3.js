function solution(arr, queries) {
    queries.forEach(e => [arr[e[0]], arr[e[1]]] = [arr[e[1]], arr[e[0]]]);
    return arr;
}