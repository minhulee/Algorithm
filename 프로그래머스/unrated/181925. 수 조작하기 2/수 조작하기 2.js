function solution(numLog) {
    const filter = { '1': 'w', '-1': 's', '10': 'd', '-10': 'a' };
    return numLog.slice(1).map((v, i) => filter[v - numLog[i]]).join('')
}