function solution(myString, pat) {
    return myString.split('').map(e => e === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;
}