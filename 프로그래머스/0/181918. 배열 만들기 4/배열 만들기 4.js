function solution(arr) {
    return arr.reduce((acc, e) => {
        while (1)
        {
            if (acc[acc.length - 1] >= e)
                acc.pop();
            else
                break ;
        }
        acc.push(e);
        return acc;
    }, []);
}

// 3
// 3 4
// 3 4 5
// 