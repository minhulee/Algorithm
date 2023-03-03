function solution(lottos, win_nums) {
    let min = lottos.filter(x => win_nums.includes(x)).length
    let max = lottos.filter(x => x === 0).length + min
    
    let answer = [];
    
    max > 1 ? answer.push(7 - max) : answer.push(6);
    min > 1 ? answer.push(7 - min) : answer.push(6);
    
    return answer;
}