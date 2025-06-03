function solution(numlist, n) {
    return numlist.sort((a, b) => {
        // 비교 대상을 요소가 아닌 n을 기준으로 한 요소간 거리로 계산
        const distA = Math.abs(a - n);
        const distB = Math.abs(b - n);

        // 거리가 같을 시 요소 비교
        if (distA === distB)
            return b - a;
        
        return distA - distB;
    });
}