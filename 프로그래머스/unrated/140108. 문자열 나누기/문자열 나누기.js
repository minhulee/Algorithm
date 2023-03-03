function solution(s) {
    let x = null;
    let counter = 0;
    let isX = 0;
    let notX = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(x === null) {
            x = s[i];
            isX++;
        }
        else if (x !== s[i]) notX++;
        else {
            isX++;
        }
        
        if(isX === notX) {
            x = null;
            counter++;
        } else if(i === s.length - 1) counter++;
    }
    
    return counter;
}