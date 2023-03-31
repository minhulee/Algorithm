function solution(quiz) {
    let answer = [];
    
    quiz.forEach(el => {
        const item = el.split(" ");
        let calc = 0;
        
        if(item[1] === "+") calc = Number(item[0]) + Number(item[2]);
        else calc = Number(item[0]) - Number(item[2]);
        
        answer.push(calc === Number(item[4]) ? "O" : "X")
    })
    
    return answer;
}