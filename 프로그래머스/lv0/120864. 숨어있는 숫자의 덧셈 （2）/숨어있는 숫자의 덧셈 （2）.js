function solution(my_string) {
    return my_string.split(/[^0-9]/g).reduce((acc, cur) => acc + Number(cur), 0);
}