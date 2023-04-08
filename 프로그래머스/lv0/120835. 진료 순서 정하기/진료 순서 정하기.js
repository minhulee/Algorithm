function solution(emergency) {
    return emergency.map((e, i) => [i, e])
            .sort((a, b) => b[1] - a[1])
            .map((e, i) => [...e, i + 1])
            .sort((a, b) => a[0] - b[0])
            .map(e => e[2]);   
}