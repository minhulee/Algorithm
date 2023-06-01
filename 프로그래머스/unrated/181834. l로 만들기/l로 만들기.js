function solution(myString) {
    return [...myString].map(e => e < 'l' ? 'l' : e).join('');
}