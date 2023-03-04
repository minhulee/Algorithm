function solution(nums) {
    let count = 0;
    
    for(let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let isPrime = true;
                const combie = nums[i] + nums[j] + nums[k];
                
                for(let devide = 2; devide < combie; devide++) {
                    if(combie % devide === 0) isPrime = false;
                }
                
                if(isPrime) count++;
            }
        }
    }
    
    return count;
}