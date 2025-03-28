function solution(myStr) {
    var answer = myStr.split(/[abc]+/).filter((e) => e.length > 0);
    return answer.length == 0 ? ["EMPTY"] : answer;
}