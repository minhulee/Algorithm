#include <stdio.h>

int factorial(int n)
{
    int res = 1, cur = 1;
    
    while (cur++ < n)
        res *= cur;
    return (res);
}

int main(void)
{
    int n, k;
    
    scanf("%d %d", &n, &k);
    printf("%d", factorial(n) / factorial(k) / factorial(n - k));
    return (0);
}