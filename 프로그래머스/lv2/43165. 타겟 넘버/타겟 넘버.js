function solution(numbers, target) {
    let answer = 0;
    
    function dfs(idx, sum) {
        if(idx === numbers.length) {
            // if(sum === target) answer++;
            answer += sum === target ? 1 : 0;
            return;
        }
        
        dfs(idx + 1, sum + numbers[idx]);
        dfs(idx + 1, sum - numbers[idx]);
    }
    
    dfs(0, 0)
    
    return answer;
}