function solution(arr, query) {
    query.forEach((e, idx) => {
        if(idx % 2 === 0) arr = arr.slice(0, e+1);
        else arr = arr.slice(e);
    })
    
    return arr;
}