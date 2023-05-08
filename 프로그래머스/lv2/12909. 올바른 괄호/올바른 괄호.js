function solution(s){
    const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') stack.push('(');
        else if(stack.length !== 0) stack.pop();
        else return false;
    }
    
    return stack.length === 0;

// function solution(s){
//     let count = 0;
    
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] === '(') count++;
//         else if(count !== 0) count--;
//         else return false;
//     }
    
//     return count === 0;
} 