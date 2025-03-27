function solution(dirs) {
    let map = {};
    let x = 5, y = 5;
    for (let route of dirs)
    {
        let start, end, result;
        start = x.toString() + y.toString();
        if (route == 'U' && y < 10)
            y++;
        else if (route == 'D' && y > 0)
            y--;
        else if (route == 'L' && x > 0)
            x--;
        else if (route == 'R' && x < 10)
            x++;
        else
            continue ;
        end = x.toString() + y.toString();
        map[start <= end ? start + end : end + start] = 1;
    }
    return Object.keys(map).length;
}