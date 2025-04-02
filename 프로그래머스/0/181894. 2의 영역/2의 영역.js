function solution(arr) {
    let s = arr.findIndex((e) => e == 2);
    let e;
    
    if (s < 0)
        return ([-1]);

    for (let i = s; i < arr.length; i++)
    {
        if (arr[i] == 2)
            e = i;
    }
    
    return (arr.slice(s, e + 1));
}