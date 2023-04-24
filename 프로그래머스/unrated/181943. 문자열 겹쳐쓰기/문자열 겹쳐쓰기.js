function solution(my_string, overwrite_string, s) {
    return my_string.split('').map((c, idx) => {
        if(overwrite_string[idx - s]) return overwrite_string[idx - s];
        else return c;
    }).join('');
}