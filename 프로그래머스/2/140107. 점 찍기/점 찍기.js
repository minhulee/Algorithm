function solution(k, d) {
    var answer = 0;
    
    for (let i = 0; i * k <= d; i++) {
        let x = i * k;
        
        let maxY = Math.floor(Math.sqrt(d * d - x * x));
        
        if (maxY >= 0) {
            answer += Math.floor(maxY / k) + 1;
        }
    }
    
    return answer;
}