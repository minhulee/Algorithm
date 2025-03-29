function solution(strArr) {
    var answer = 0;
    let obj = {};
    for (let str of strArr)
    {
        if (obj[str.length] === undefined)
            obj[str.length] = 1;
        else
            obj[str.length]++;
    }
    return Math.max(...Object.values(obj));
}