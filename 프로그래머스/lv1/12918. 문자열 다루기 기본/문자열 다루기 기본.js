function solution(s) {
    if(!(s.length === 4 || s.length === 6)) return false;
    
    const filter = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    
    for(let c of s) {
        if(!filter.includes(c)) return false;
    }
    
    return true;
}