function solution(keyinput, board) {
    // 범위 및 명령어 목록 정의
    const   range = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
    const   cmd = {
        "left" : [0, -1],
        "right" : [0, 1],
        "up" : [1, 1],
        "down" : [1, -1]
    };
    
    // 결과 초기화
    let     answer = [0, 0];
    
    // 입력값 실행
    keyinput.forEach((key) => {
        // key to cmd
        let [ dir, dis ] = cmd[key];
        
        // 방향과 거리에 따른 명령어 무시 적용
        if (dis < 0 && answer[dir] > range[dir] * dis)
            answer[dir] += dis;
        else if (dis > 0 && answer[dir] < range[dir] * dis)
            answer[dir] += dis;
    })
    
    return (answer);
}