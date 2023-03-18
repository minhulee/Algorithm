function solution(n) {
    let count = 0;
    let start = 1, num = 1, sum = 0;

    while(start <= n) {
        sum += num;
      
        if(sum === n) count++;
        else if(sum > n) {
            sum = 0;
            start++;
            num = start;
        }else num++;
    }

  return count;
}