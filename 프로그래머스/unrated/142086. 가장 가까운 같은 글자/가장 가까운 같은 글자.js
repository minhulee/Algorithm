function solution(s) {
    const result = [];
    const loaded = [];
    
    for(let i = 0; i < s.length; i++) {
        const loadedIdx = loaded.lastIndexOf(s[i])
        
        if(loadedIdx > -1) result.push(i - loadedIdx);
        else result.push(-1);
        
        loaded.push(s[i]);
    } 
    
    return result;
}