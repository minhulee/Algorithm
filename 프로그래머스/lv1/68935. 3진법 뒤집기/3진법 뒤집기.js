function solution(n) {
    let answer = [];
    let result = 0;
    
    while(n >= 3) {
        answer.unshift(parseInt(n % 3)); 
        n = n / 3;
    }
    
    answer.unshift(parseInt(n % 3))
    answer = answer.join("");
    
    for(let i = 0; i < answer.length; i++) {
        result += parseInt(answer[i]) * (3**i)
    }
    
    return result;
}