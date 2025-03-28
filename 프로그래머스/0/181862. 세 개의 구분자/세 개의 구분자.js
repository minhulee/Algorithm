function solution(myStr) {
    var answer = [];
    let buffer = "";
    for (let c of myStr)
    {
        if (c == 'a' || c == 'b' || c == 'c')
        {
            if (buffer.length != 0)
                answer.push(buffer);
            buffer = "";
            continue ;
        }
        buffer += c;
    }
    if (buffer.length != 0)
        answer.push(buffer);
    return !answer.length ? ["EMPTY"] : answer; 
}