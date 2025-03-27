function solution(k, d) {
    var answer = 0;
    
    for (let x = 0; x <= d; x += k)
        answer += Math.floor(Math.floor(Math.sqrt(d * d - x * x)) / k) + 1;
    
    return answer;
}