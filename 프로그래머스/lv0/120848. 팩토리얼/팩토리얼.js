function solution(n) {
    let answer = 1;
    
    for(let i = 1; i <= 11; i++) {
        answer = answer * i;
        if(answer > n) return i - 1;
    }
}