function solution(n) {
    const count = n.toString(2).match(/1/g).length
    
    while(n++) {
        if(count === n.toString(2).match(/1/g).length) return n;
    }
}