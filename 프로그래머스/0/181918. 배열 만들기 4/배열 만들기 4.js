function solution(arr) {
    return arr.reduce((acc, e) => {
        let count = 0;
        while (acc.length > 0 && acc[acc.length - 1 - count] >= e)
            count++;
        acc = acc.slice(0, acc.length - count);
        acc.push(e);
        return acc;
    }, []);
}