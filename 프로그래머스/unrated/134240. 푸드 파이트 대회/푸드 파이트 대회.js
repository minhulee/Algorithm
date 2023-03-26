function solution(food) {
    let result = [0];
    
    food.reverse().forEach((quantity, idx) => {
        const calorie = food.length - (idx + 1);
        
        while(quantity >= 2) {
            result = [calorie, ...result, calorie];
            quantity -= 2;
        }
    })
    
    return result.join('');
}