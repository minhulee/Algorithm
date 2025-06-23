function factorial(n) {
    let res = 1n;
    for (let i = 2n; i <= n; i++)
        res *= i;
    return res;
}

// 30!은 큰 수다..
function solution(balls, share) {
    const n = BigInt(balls);
    const m = BigInt(share);
    const res = factorial(n) / (factorial(m) * factorial(n - m));
    
    return res
}
