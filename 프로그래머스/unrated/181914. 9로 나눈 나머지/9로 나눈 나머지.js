function solution(number) {
    return number.split('').map(e => Number(e)).reduce((a, c) => a+c) % 9;
}