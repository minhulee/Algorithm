function solution(d, budget) {
    let count = 0;
    d.sort((a, b) => a - b).forEach(el => {
        if(budget - el < 0) return
        budget -= el;
        count++;
    })
    
    return count;
}