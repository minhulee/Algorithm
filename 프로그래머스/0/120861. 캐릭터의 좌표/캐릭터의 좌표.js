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
        // 명령어 파싱 및 이동 결과 계산
        let [ dir, dis ] = cmd[key];
        let next = answer[dir] + dis;
        
        // 이동 결과가 범위를 벗어나지 않는지 확인
        if (Math.abs(next) <= range[dir])
            answer[dir] = next;
    })
    
    return (answer);
}