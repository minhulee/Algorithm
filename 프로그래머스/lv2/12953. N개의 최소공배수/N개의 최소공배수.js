function solution(arr) {
    arr.sort((a, b) => b-a);   
    let result = 0, flag = false;
    
    while(!flag) {
        result += arr[0];
        
        for(let i = 1; i < arr.length; i++) {
            if(result % arr[i] === 0) flag = true;
            else {
                flag = false;
                break;
            }
        }
    }
    
    return result;
}