function solution(s) {
    const filter = ['zero', 'one', "two", "three", "four", "five", "six", "seven", "eight", "nine"];    
    let answer = "";
    let temp = "";
    
    for(let char of s) {
        console.log(answer, temp);
        if(isNaN(char)) temp += char;
        else answer += char;
        
        if(filter.includes(temp)) {
            answer += filter.indexOf(temp);
            temp = '';
        }
    }
    
    return Number(answer);
}