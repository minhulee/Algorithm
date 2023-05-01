function solution(num_str) {
    return num_str.split('').reduce((a,c) => Number(a) + Number(c));
}