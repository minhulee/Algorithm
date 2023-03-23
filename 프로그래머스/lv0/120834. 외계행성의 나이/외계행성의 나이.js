function solution(age) {
    const filter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let result = '';
    
    for(let char of age.toString()) {
        result += filter[char];
    }
    
    return result;
}