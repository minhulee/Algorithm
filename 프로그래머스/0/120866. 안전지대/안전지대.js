function solution(board) {
    const n = board.length;
    const dangerZone = Array.from({ length: n }, () => Array(n).fill(0));
    const dirX = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
    const dirY = [-1, 0, 1, -1, 0, 1, -1, 0, 1];
    
    // 정사각형이므로 x, y의 순서는 상관 x
    for (let x = 0; x < n; x++)
    {
        for (let y = 0; y < n; y++)
        {
            // 폭탄이 아닌 경우 스킵
            if (board[x][y] !== 1)
                continue ;
            
            // 폭탄을 기준으로 8칸 처리
            for (let i = 0; i < 9; i++)
            {
              const nx = x + dirX[i];
              const ny = y + dirY[i];
              if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                dangerZone[nx][ny] = 1;
              }
            }
        }
    }
    
    return dangerZone.flat().filter((e) => e === 0).length;
}