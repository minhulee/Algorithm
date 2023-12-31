#include <stdio.h>
#define  base "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

int main(void)
{
    int n, b, filter = 1;
    
    scanf("%d %d", &n, &b);
    while (filter <= n / b)
        filter *= b;
    while (filter > 0)
    {
        printf("%c", base[n / filter]);
		n %= filter;
        filter /= b;
    }
    return (0);
}