function solution(k, tangerine) {
    let answer = 0;
    let table = {};
    
    tangerine.forEach(s => {
        if(!table[s]) table[s] = 1;
        else table[s]++;
    });
                      
    table = Object.values(table).sort((a, b) => b - a);
    
    for(let e of table) {
        if(k < 1) break;
        k -= e;
        answer++;
    }
    
    return answer;
}