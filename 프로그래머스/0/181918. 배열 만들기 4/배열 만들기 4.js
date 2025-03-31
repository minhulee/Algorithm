function solution(arr) {
    return arr.reduce((acc, e) => {
        while (acc.length > 0 && acc[acc.length - 1] >= e)
            acc.pop();
        acc.push(e);
        return acc;
    }, []);
}