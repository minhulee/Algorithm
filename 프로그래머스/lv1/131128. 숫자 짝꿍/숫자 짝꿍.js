function solution(X, Y) {
    X = X.split(''), Y = Y.split('');
    // 겹치는 갯수로 새로운 문자열을 만든다.
    // 해당 문자열을 조작하여 정답을 출력한다.
    let t = '';
    
    for(let i = 0; i < 10; i++) {
        const x = X.filter(el => Number(el) === i).length;
        const y = Y.filter(el => Number(el) === i).length;
        t += i.toString().repeat(Math.min(x, y));
    }
    
    if(t.length < 1) return '-1';
    t = t.split('').sort((a, b) => b - a);
    
    return t[0] > 0 ? t.join('') : '0';
}