function solution(N, stages) {
    return new Array(N).fill(0).map((el, idx) => {
        const cur = stages.filter(st => st === idx + 1).length;
        const clear = stages.filter(st => st >= idx + 1).length;
        return [idx + 1, cur / clear];
    }).sort((a, b) => b[1] - a[1]).map(el => el[0]);
}