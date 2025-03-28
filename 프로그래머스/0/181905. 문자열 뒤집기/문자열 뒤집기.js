function solution(my_string, s, e) {
    let answer = my_string.substr(0, s);
    for (let i = e; i >= s; i--)
        answer += my_string[i];
    answer += my_string.substr(e + 1);
    return (answer);
}