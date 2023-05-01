function solution(arr, n) {
    return arr.length % 2 === 0 ?
        arr.map((e, i) => {
            if(i % 2 !== 0) return e + n;
            return e;
        }) : 
        arr.map((e, i) => {
            if(i % 2 === 0) return e + n;
            return e;
        });
}