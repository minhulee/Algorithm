function solution(people, limit) {
    let result = 0;
    let l = 0, r = people.length-1;
    
    // 2개의 수의 가장 작은 합을 찾기 위해 올림차순 정렬한다.
    people.sort((a, b) => a - b);
    
    while(l < r) {
        // 가장 작은 수와 가장 큰 수의 합이 불가능할 경우
        if(people[l] + people[r] > limit) r--;
        else { // 합이 가능할 경우
            l++;
            r--;
        }
        result++;
    }
    
    // 계산되지 않은 사람이 남은 경우
    if(l === r) result++;
    
    return result;
}