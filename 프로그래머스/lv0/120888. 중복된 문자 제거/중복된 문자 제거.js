function solution(my_string) {
    const answer = [];
    
    my_string.split('').forEach(el => {
        if(!answer.includes(el)) answer.push(el);
    })
    
    return answer.join('');
}