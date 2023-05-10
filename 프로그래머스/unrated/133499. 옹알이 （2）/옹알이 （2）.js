function solution(babbling) {
    let answer = 0;
    const filter = ['aya', 'ye', 'woo', 'ma'];
    
    babbling.forEach(e => {
        let t = e;
        let s = filter.find(e => t.includes(e))
        
        while(s) {
            if(t.includes(s.repeat(2))) break;
            t = t.replace(s, ' ');
            s = filter.find(e => t.includes(e));
        }
        
        if(t.replaceAll(' ', '').length === 0) answer++;
    })

    return answer;    
}