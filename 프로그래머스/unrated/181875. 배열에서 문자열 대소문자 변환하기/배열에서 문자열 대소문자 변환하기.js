function solution(strArr) {
    return strArr.map((c, i) => {
        if(i % 2 === 0) return c.toLowerCase();
        else return c.toUpperCase();
    })
}