function solution(n) {
    let count = 0;
    const arr = new Array(n+1).fill(true);
    const end = Math.sqrt(n);
    
    // 2부터 N까지의 모든 자연수를 나열한다
    // 남은 수 중에서 아직 처리하지 않은 가장 작은 수 i를 찾는다
    // 남은 수 중에서 i의 배수를 모두 제거한다(i는 제거하지 않는다)
    // 더 이상 반복할 수 없을 때까지 2번과 3번 과정을 반복한다.
    for(let i = 2; i <= end; ++i) {
        if(!arr[i]) continue; 

        for(let k = i * i; k <= n; k += i) arr[k] = false;
    }
    
    for(let i = 2; i <= n; ++i) if(arr[i]) count++;
    
    return count;
}