function findStart(park) {
    for (let i = 0; i < park.length; i++)
        for (let j = 0; j < park[i].length; j++)
            if (park[i][j] === 'S')
                return [i, j];
}

function solution(park, routes) {
    let [x, y] = findStart(park);
    const dirMap = {
        'N': [-1, 0],
        'S': [1, 0],
        'W': [0, -1],
        'E': [0, 1]
    };

    for (let route of routes)
    {
        let [dir, dist] = route.split(' ');
        let [nx, ny] = [x, y];
        let flag = true;

        // 경계 및 장애물 체크
        while (dist > 0)
        {
            const [dx, dy] = dirMap[dir];
            nx += dx;
            ny += dy;

            if (nx < 0 || ny < 0 ||
                nx >= park.length || ny >= park[0].length ||
                park[nx][ny] === 'X')
            {
                flag = false;
                break;
            }
            dist--;
        }

        // 이동 가능 시 반영
        if (flag)
        {
            x = nx;
            y = ny;
        }
    }

    return [x, y];
}
