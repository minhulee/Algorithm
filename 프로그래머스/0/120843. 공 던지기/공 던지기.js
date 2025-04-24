function solution(numbers, k) {
    let cursor = 0;
    while (--k > 0)
    {
        cursor += 2;
        if (cursor >= numbers.length)
            cursor -= numbers.length;
    }
    return numbers[cursor];
}