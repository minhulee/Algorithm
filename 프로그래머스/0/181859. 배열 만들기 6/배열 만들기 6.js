function solution(arr) {
    var answer = [arr[0]];
    for (let i = 1; i < arr.length; i++)
    {
        if (answer[answer.length - 1] == arr[i])
            answer.pop();
        else
            answer.push(arr[i]);
    }
    return answer.length == 0 ? [-1] : answer;
}