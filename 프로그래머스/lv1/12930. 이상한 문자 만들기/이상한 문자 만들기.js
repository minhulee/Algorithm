function solution(s) {
    let idx = 0;
    let answer = "";
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === " ") idx = -1;
        
        if(idx % 2 === 0) answer += s[i].toUpperCase();
        else answer += s[i].toLowerCase();
        
        idx++;
    }
    
    return answer;
}