function solution(num, x = 0) {
    if(x === 500) return -1;
    if(num === 1) return x;
    
    if(num % 2 === 0) num /= 2;
    else num =  num * 3 + 1;
    
    return solution(num, x + 1);
}