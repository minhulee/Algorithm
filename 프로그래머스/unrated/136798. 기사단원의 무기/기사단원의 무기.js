function solution(number, limit, power) {
    let iron = 0;
    
    const countDivisor = (n) => {
        let count = 0;
        
        for(let i = 1; i <= Math.sqrt(n); i++) {
            if(n % i === 0) {
                count++;
                if(n / i !== i) count++;
            }
        }
        
        return count;
    }
    
    for(let i = 1; i <= number; i++) {
        let count = countDivisor(i);
        count > limit ? iron += power : iron += count;
    }
    
    return iron;
}