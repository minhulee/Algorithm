function solution(board, moves) {
    let result = 0;
    const stack = [];
    
    moves.forEach(m => {  
        // 인형 뽑기
        for(let i = 0; i < board.length; i++) {
            const target = board[i][m-1];
            
           if(target === stack[stack.length - 1]) {
                stack.pop();
                board[i][m-1] = 0;
                result += 2;
                break;
            } else if (target !== 0) {
                stack.push(target);
                board[i][m-1] = 0;
                break;
            }
        }
    })
    
    return result;
}