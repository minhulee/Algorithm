function solution(nums) {
    let count = 0;
    
    const primeCheck = (n) => {
        for(let d = 2; d < Math.sqrt(n) + 1; d++) {
            if(n % d === 0) return false;
        }
        
        return true;
    }
    
    for(let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if(primeCheck(nums[i] + nums[j] + nums[k])) count++;
            }
        }
    }
    
    return count;
}