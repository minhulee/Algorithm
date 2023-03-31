function solution(i, j, k) {
    let count = 0;
    
    for(let num = i; num <= j; num++) {
        `${num}`.split('').forEach(el => {
            if(el === `${k}`) count++;
        })
    }
    
    return count;
}