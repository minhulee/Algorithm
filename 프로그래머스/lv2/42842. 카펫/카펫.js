function solution(brown, yellow) {
    const max = brown + yellow;
    
    for(let h = 3; h <= brown; h++) {
        if(max % h === 0) {
            const w = max / h;
            
            if((w-2) * (h-2) === yellow) return [w, h];
        }
    }
}