function solution(numbers, n) {
    let result = 0;
    
    while(result <= n) result += numbers.shift();
    
    return result;
}