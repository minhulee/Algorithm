function solution(s) {
    let count = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(count === -1) return false;
        else if(s[i] === '(') count++;
        else count--;
    }
    
    return count === 0;
} 