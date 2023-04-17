function solution(numbers, hand) {
    let result = '';
    const pad = {1:[1, 1], 2:[1, 2], 3:[1, 3], 4:[2, 1], 5:[2, 2], 6:[2, 3], 7:[3, 1], 8:[3, 2], 9:[3, 3],
                 0:[4, 2]};
    const curHand = [[4, 1], [4, 3]];
    
    return numbers.map(n => {
        // 누를 숫자의 영역이 좌 혹은 우
        if([1, 4, 7].includes(n)) {
            curHand[0] = pad[n];
            return 'L';
        } else if ([3, 6, 9].includes(n)) {
            curHand[1] = pad[n];
            return 'R';
        } else { // 누를 숫자의 영역이 중앙
            // 각 손가락과 숫자의 거리
            const L = Math.abs(curHand[0][0] - pad[n][0]) + Math.abs(curHand[0][1] - pad[n][1]);
            const R = Math.abs(curHand[1][0] - pad[n][0]) + Math.abs(curHand[1][1] - pad[n][1]);
            
            // 거리가 다르거나 거리가 같을 경우
            if(L < R) {
                curHand[0] = pad[n];
                return 'L';
            } else if(L > R) {
                curHand[1] = pad[n];
                return 'R';
            } else if(hand === 'left') {
                curHand[0] = pad[n];
                return 'L';
            } else {
                curHand[1] = pad[n];
                return 'R';
            }
        }
    }).join('');
}