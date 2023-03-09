function solution(numbers) {
    const answer = [];
    
    for(let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const temp = numbers[i] + numbers[j];
            if(!answer.includes(temp)) answer.push(temp);
        }
    }
    
    return answer.sort((a, b) => a - b);
}