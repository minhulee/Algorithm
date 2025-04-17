function solution(a, b, c, d) {
    let dices = [a, b, c, d].sort((a, b) => a - b);
    let std = [];
    // 기준 배열 생성, dice가 이미 정렬되어 있기 때문에 std의 마지막 요소만 탐색
    for (let dice of dices)
    {
        const last = std[std.length - 1];
        if (last !== undefined && last[0] === dice)
            last.push(dice);
        else
            std.push([dice]);
    }
    
    // 기준 배열을 통해 결과 반환
    if (std.length == 1)
        return (1111 * std[0][0]);
    if (std.length == 2)
    {
        if (std[0].length == 2)
            return ((std[0][0] + std[1][0]) * Math.abs(std[0][0] - std[1][0]));
        else
        {
            let p = std[0].length == 3 ? std[0][0] : std[1][0];
            let q = std[0].length == 3 ? std[1][0] : std[0][0];
            return (Math.pow(10 * p + q, 2));
        }
    }
    if (std.length == 3)
    {
        let [q, r] = std.filter(group => group.length == 1).map(group => group[0])
        return (q * r);
    }
    return (Math.min(...dices));
}