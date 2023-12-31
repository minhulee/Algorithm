#include <stdio.h>

int main(void)
{
    int a, b, c, n, filter = 1, ary[10] = {0,};
    
    scanf("%d %d %d", &a, &b, &c);
    n = a * b * c;
    while (filter <= n / 10)
        filter *= 10;
    while (filter > 0)
    {
        ary[n / filter]++;
        n %= filter;
        filter /= 10;
    }
    for (int i = 0; i < 10; i++)
        printf("%d\n", ary[i]);
    return (0);
}