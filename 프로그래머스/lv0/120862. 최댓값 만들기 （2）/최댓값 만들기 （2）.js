function solution(numbers) {
    const arr = numbers.sort((a, b) => b-a);
    
    return Math.max(arr[arr.length - 1] * arr[arr.length - 2], arr[0] * arr[1]);
}