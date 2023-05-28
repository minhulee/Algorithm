function solution(numLog) {
    return numLog.reduce((a, c, i) => {
        if(numLog[i+1] === undefined) return a;
        
        const diff = numLog[i+1] - numLog[i];
        
        if(diff === 1) return a += 'w';
        if(diff === -1) return a += 's';
        if(diff === 10) return a += 'd';
        if(diff === -10) return a += 'a';  
    }, '')
}