function solution(score) {
    var answer = [];
    score = score.map((e) => (e[0] + e[1]) / 2);
    for (let s of score)
        answer.push(score.filter(e => e > s).length + 1)
    return answer;
}