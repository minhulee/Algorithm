function solution(a, b) {
    const ans1 = Number(`${a}${b}`), ans2 = Number(`${b}${a}`);
    
    if(ans2 > ans1) return ans2;
    else return ans1;
}