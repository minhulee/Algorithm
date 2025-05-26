function solution(rank, attendance) {
    const sorted = rank.map((e, i) => [e, i]).filter((e, i) => attendance[i]).sort((a, b) => a[0] - b[0]);
    return (10000 * sorted[0][1] + 100 * sorted[1][1] + sorted[2][1]);
}
