function solution(n, m, section) {
    let count = 1, cur = section[0];
    
    section.forEach(s => {
        //칠해야하는 구역이 현재 구역 + 롤러의 영역을 벗어나는 경우
        if(cur + m - 1 < s) {
            cur = s;
            count++;
        }
    })
    
    return count;
    
}