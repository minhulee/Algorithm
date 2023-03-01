function solution(n, m) {
    const result = [0, 0];
    const big = Math.max(n, m);
    const small = Math.min(n, m)
    
    for(let i = 1; i < big; i++) {
        if(n % i === 0 && m % i === 0 && result[0] < i) result[0] = i;
    }
    
    let count = 1;
    while(!result[1]) {
        if(big * count % small === 0) result[1] = big * count;
        else count++;
    }
    
    return result;
}