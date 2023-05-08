function solution(s){
//     const stack = [];
    
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] === '(') stack.push('(');
//         else if(stack.length !== 0) stack.pop();
//         else return false;
//     }
    
//     return stack.length === 0;

    let count = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(count === -1) return false;
        if(s[i] === '(') count++;
        else count--;
    }
    
    return count === 0;
} 