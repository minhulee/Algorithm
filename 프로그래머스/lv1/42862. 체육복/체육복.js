function solution(n, lost, reserve) {
    let answer = 0;
    let nDupR = reserve.filter(e => !lost.includes(e));
    let nDupL = lost.filter(e => !reserve.includes(e));
    
    nDupL = nDupL.sort((a, b) => b - a);
    for (let i = 0 ; i < nDupL.length; i ++) {
        if(nDupR.includes(nDupL[i] + 1)) {
            answer++;
            nDupR = nDupR.filter(e => e !== nDupL[i] + 1);
        } else if(nDupR.includes(nDupL[i] - 1)) {
            answer++;
            nDupR = nDupR.filter(e => e !== nDupL[i] - 1);
        }
    }
    
    return n - nDupL.length + answer;
}