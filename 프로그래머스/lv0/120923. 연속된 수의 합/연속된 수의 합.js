function solution(num, total) {
    const center = parseInt(total / num);
    const diff = parseInt(num / 2);
    
    if(total % num === 0) return new Array(num).fill(0).map((el, idx) => idx + center - diff );
    else return new Array(num).fill(0).map((el, idx) => idx + center - diff + 1 );
}