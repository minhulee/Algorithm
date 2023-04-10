function solution(my_string) { 
    my_string = my_string.split(' ');
    let answer = Number(my_string[0]);
    
    my_string.forEach((el, idx) => {
        if(el === '+') answer += Number(my_string[idx + 1]);
        else if(el === '-')answer -= Number(my_string[idx + 1]);
    })
    
    return answer;
}