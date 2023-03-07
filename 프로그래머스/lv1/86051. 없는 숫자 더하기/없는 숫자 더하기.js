function solution(numbers) {
    const filter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    return filter.filter(el => !numbers.includes(el)).reduce((acc, cur) => acc += cur)
}