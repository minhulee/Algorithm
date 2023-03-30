function solution(before, after) {
    before = [...before], after = [...after];
    
    for(let char of after) {
        const idx = before.indexOf(char);
        
        if(idx < 0) return 0;
        else {
            before.splice(idx, 1);
        }
    }
    
    return before.length === 0 ? 1 : 0;
}