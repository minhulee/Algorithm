function solution(arr, k) {
    let result = [];
    let set = new Set();

    for (let num of arr)
    {
        if (!set.has(num))
        {
            result.push(num);
            set.add(num);
        }
        
        if (result.length === k)
            break;
    }

    while (result.length < k)
        result.push(-1);

    return result;
}