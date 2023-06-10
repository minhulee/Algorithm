function solution(arr, queries) {
    return queries.map(q => {
        const [s, e, k] = q;
        const result = arr.filter((n, i) => s <= i && i <= e && n > k).sort((a, b) => a-b)[0];
        // const result = arr.slice(s, e+1).sort((a,b) => a-b).find(n => n > k);
        
        return result ? result : -1;
    })
}