function solution(arr, queries) {
    queries.forEach(([s, e, k]) => {
        for (let idx = Math.ceil(s / k) * k; idx <= e; idx += k)
            arr[idx]++;
    })
    return arr;
}