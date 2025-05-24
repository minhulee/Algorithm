function solution(q, r, code) {
    return code.split('').filter((e, i) => i % q == r).join('');
}