function solution(s) {
    const len = s.length;
    return len % 2 !== 0 ? s[parseInt(len/2)] : s.slice(len/2 - 1, len/2 + 1)
}