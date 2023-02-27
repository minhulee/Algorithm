function solution(left, right) {
    let answer = 0;
    
    for(let i = left; i <= right; i++) {
        if(checkNum(i)) answer += i;
        else answer -= i;
    }
    
    return answer;
}

function checkNum(num) {
    const divisor = [];
    
    for(let i = 1; i <= num; i++) {
        if(num % i === 0) divisor.push(i);
    }
    
    return divisor.length % 2 === 0 ? true : false;
}