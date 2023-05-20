function solution(arr) {
    const result = [];
    
    arr.forEach(e => {
        for(let i = 0; i < e; i++) result.push(e)
    })
    
    return result;
}