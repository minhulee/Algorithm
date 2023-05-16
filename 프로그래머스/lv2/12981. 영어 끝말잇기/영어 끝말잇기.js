function solution(n, words) {
    const filter = {};
    
    for(let i = 0; i < words.length; i++) {
        const cur = words[i], pre = words[i-1];
        
        if (i > 0 && cur[0] !== pre[pre.length-1] || filter[cur]) {
            return [(i+1)%n === 0 ? n : (i+1)%n, Math.ceil((i+1)/n)];
        } else filter[cur] = true;
    }
    
    return [0, 0];
}