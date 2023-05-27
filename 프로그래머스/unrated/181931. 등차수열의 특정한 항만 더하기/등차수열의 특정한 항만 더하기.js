function solution(a, d, included) {
    return included.reduce((acc, cur, i) => cur ? acc + (a + i * d) : acc, 0)
}