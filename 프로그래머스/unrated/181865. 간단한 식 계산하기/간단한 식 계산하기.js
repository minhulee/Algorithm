function solution(binomial) {
    const [a, op, b] = binomial.split(' ');
    
    switch(op) {
        case '+' : return a*1 + b*1;
        case '-' : return a*1 - b*1;
        case '*' : return a*1 * b*1;
        case '/' : return a*1 / b*1;
    }
}