function solution(s) {
    let result = [];
    
    for(let c of s) {
        if(s.indexOf(c) === s.lastIndexOf(c)) result.push(c);
    }
    
    return result.sort().join('');
}