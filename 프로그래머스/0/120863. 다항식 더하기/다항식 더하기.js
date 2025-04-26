function solution(p) {
    p = p.split(' + ');
    let res = p.reduce((acc, e) => {
        if (e == 'x')
            acc[1]++;
        else if (e[e.length - 1] != 'x')
            acc[0] += Number(e);
        else
            acc[1] += Number(e.substr(0, e.length - 1));
        return acc;
    }, [0, 0])
    let answer = `${res[1] > 0 ? (res[1] == 1 ? '' : res[1]) + 'x' : ''}`;
    answer += (answer == '' || res[0] == 0) ? '' : ' + ';
    answer += `${res[0] > 0 ? res[0] : ''}`;
    return answer.length == 0 ? '0' : answer;
}