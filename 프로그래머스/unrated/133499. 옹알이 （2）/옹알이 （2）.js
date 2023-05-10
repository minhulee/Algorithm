function solution(babbling) {
    let answer = 0;
    const filter = ['aya', 'ye', 'woo', 'ma'];
    
    babbling.forEach(e => {
        let t = e;
        let s = filter.find(e => t.includes(e))
        
        while(s) {
            // 문자열이 중복되는 경우, 가능한 발음을 제외하고 합친 문자열이 발음이 되는 경우
            if(t.includes(s.repeat(2))) break;
            t = t.replace(s, ' ');
            s = filter.find(e => t.includes(e));
        }
        
        if(t.replaceAll(' ', '').length === 0) answer++;
    })

    return answer;    
}