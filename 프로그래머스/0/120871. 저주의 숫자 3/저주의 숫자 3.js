function solution(n) {
    let res = 0;
    let count = 0;
    
    // 원하는 n에 도달할 때까지
    while (count < n)
    {
        res++;
        // 조건을 충족하지 못한다면 count 증가 생략
        if (res % 3 === 0 || String(res).includes('3'))
            continue ;
        count++;
    }
    
    return res;
}