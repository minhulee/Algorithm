function solution(my_str, n) {
    const result = [];
    const range = my_str.length / n % 1 === 0 ? my_str.length / n : parseInt(my_str.length / n) + 1;
    
    for(let i = 0; i < range; i++) {
        result.push(my_str.slice(i * n, (i + 1 ) * n));
    } 
    
    return result;
    
}