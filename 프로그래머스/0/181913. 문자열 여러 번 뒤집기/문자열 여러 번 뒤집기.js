function solution(my_string, queries) {
    for (let query of queries)
    {
        let tmp = my_string.substr(0, query[0]);
        tmp += my_string.substr(query[0], query[1] - query[0] + 1).split('').reverse().join('');
        tmp += my_string.substr(query[1] + 1);
        my_string = tmp;
    }
    return my_string;
}