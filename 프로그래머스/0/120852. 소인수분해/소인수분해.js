function solution(n) {
    var answer = [];
    let fac = 2;
    while (n > 1)
    {
        if (n % fac == 0)
        {
            if (answer[answer.length - 1] !== fac)
                answer.push(fac);
            n /= fac;
        }
        else
            fac++;
    }
    return answer;
}