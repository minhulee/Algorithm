function solution(n) {
    // return new Array(n).fill('').map((el, idx) => {
    //     if(idx % 2 === 0) return '수'
    //     else return '박'
    // }).join('');
    
    // return '수박'.repeat(n % 2 === 0 ? n / 2 : parseInt(n / 2) + 1).slice(0, n);
    return '수박'.repeat(n / 2) + (n % 2 !== 0 ? '수' : '');
}