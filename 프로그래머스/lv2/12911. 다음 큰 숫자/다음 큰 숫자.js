function solution(n) {
    const count = `${n.toString(2)}`.split("").filter(el => el === "1").length - 1;
    let answer = n + 1;
    
    while(true) {
        const count2 = `${answer.toString(2)}`.split("").filter(el => el === "1").length - 1;
        if(count === count2) return answer;
        
        answer++;
    }
}