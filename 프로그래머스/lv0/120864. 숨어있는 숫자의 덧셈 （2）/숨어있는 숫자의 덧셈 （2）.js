function solution(my_string) {
    return my_string.split(/[^0-9]/g).reduce((acc, cur) => { 
        return Number(cur) ? acc + Number(cur) : acc;
    }, 0);
}