function solution(arr1, arr2) {
    if(arr1.length === arr2.length) {
        const sum1 = arr1.reduce((a,c) => a+c), sum2 = arr2.reduce((a,c) => a+c);
        return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1;
    } else if(arr1.length > arr2.length) return 1;
    else return -1;
}