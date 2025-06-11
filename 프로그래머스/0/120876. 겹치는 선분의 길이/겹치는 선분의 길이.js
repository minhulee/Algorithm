function solution(lines) {
    var count = 0;
    const start = Math.min(...lines.map(([a, b]) => a));
    const end = Math.max(...lines.map(([a, b]) => b));
    
    for (let i = start; i < end; i++)
    {
        // i ~ i+1 의 범위가 a ~ b 범위 안에 겹치는지 확인
        if (lines.filter(([a, b]) => a < i + 1 && b > i).length >= 2)
            count++;
    }
    
    return count;
}