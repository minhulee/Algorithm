function solution(order) {
    return order.toString().split('').filter(el => ['3', '6', '9'].includes(el)).length;
}