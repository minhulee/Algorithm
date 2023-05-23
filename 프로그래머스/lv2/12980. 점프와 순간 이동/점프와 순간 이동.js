function solution(n, c=0)
{
    // if(n <= 0) return c;
    // if(n % 2 === 0) return solution(n/2, c);
    // else return solution(n-1, c+1);
    
    while(n > 0) {
        if(n % 2 === 0) n = n/2;
        else {
            c++;
            n -= 1;
        }
    }
    
    return c;
}