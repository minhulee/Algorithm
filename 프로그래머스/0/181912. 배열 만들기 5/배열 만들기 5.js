function solution(intStrs, k, s, l) {
    var answer = [];
    for (str of intStrs)
    {
        let target = Number(str.substr(s, l));
        if (target > k)
            answer.push(target);
    }
    return answer;
}