function solution(s) {
    var answer = 0;
    let buf = "";
    let pre = 0;
    for (let cursor = 0; cursor <= s.length; cursor++)
    {
        if (s[cursor] == ' ' || cursor == s.length)
        {
            let oper = (buf == 'Z') ? -Number(pre) : Number(buf);
            pre = (buf == 'Z') ? 0 : oper;
            answer += oper;
            buf = "";
            continue ;
        }
        buf += s[cursor];
    }
    return answer;
}