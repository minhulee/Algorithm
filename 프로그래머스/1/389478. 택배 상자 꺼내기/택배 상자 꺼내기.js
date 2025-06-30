function solution(n, w, num) {
    // 박스의 위치 계산
    const row = Math.floor((num - 1) / w);
    const idx = (num - 1) % w;
    const col = row % 2 === 0 ? idx : w - 1 - idx;
    
    let count = 1;
    
    // 같은 열의 박스 개수 계산
    for (let r = row + 1; r * w < n; r++)
    {
        const i = r % 2 === 0 ? col : w - 1 - col;
        const box = r * w + i + 1;
        
        if (box > n)
            break;
        
        count++;
    }

    return count;
}
