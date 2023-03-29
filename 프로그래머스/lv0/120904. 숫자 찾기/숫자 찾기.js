function solution(num, k) {
    const answer = num.toString().split('').indexOf(`${k}`);
    return answer === -1 ? answer : answer + 1;
}