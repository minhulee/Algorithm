function solution(orders) {
    var answer = 0;
    for (let order of orders)
    {
        if (order.includes("cafelatte"))
            answer += 5000;
        else
            answer += 4500;
    }
    return answer;
}