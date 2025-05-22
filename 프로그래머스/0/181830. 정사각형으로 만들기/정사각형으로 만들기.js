function solution(arr) {
    // 정사각형이 되기 위한 w 계산
    const w = Math.max(arr.length, ...arr.map((e) => e.length))
    
    // 행 생성
    let res = arr.map((e) => {
        if (e.length == w)
            return e;
        return e.concat(new Array(w - e.length).fill(0));
    })
    
    // 열 생성
    if (res.length == w)
        return (res);
    return (res.concat(new Array(w - res.length).fill(new Array(w).fill(0))))
}