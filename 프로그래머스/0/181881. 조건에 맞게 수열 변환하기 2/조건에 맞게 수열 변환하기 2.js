function solution(arr) {
    let cnt = -1;
    let change = true;
    while (change)
    {
        change = false;
        let cur = arr.map((e) => {
            if ((e >= 50) && (e % 2 == 0))
            {
                change = true;
                return (e / 2);   
            }
            else if ((e < 50) && (e % 2 == 1))
            {
                change = true;
                return (e * 2 + 1);
            }
            return (e);
        })
        // console.log(arr, cur, change);
        arr = cur;
        ++cnt;
    }
    return cnt;
}