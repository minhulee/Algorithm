function solution(answers) {
    const sheet = [[1,2,3,4,5],
                   [2,1,2,3,2,4,2,5],
                   [3,3,1,1,2,2,4,4,5,5]];
    const count = [0, 0, 0];
    const answer = [];
    
    // 수포자 별 정답 수 카운트하기
    for(let i = 0; i < answers.length; i++) {
        if (sheet[0][i % sheet[0].length] === answers[i]) count[0]++;
        if (sheet[1][i % sheet[1].length] === answers[i]) count[1]++;
        if (sheet[2][i % sheet[2].length] === answers[i]) count[2]++;
    }
    
    // 카운트한 정답 수를 통해 결과 도출
    const max = Math.max(...count);
    
    for (let j = 0; j < count.length; j++) {
        if (count[j] === max) answer.push(j + 1);
    }
    
    return answer;
}