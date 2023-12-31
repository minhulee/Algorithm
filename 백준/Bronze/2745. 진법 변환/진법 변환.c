#include <stdio.h>
#include <string.h>
#define  base "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

int square(int b, int t)
{
    int res = 1;
    for (int i = 0; i < t; i++)
		res *= b;
    return (res);
}

int main(void)
{
    char n[30] = { 0 };
    int b, i = 0, total = 0, cur;
    
    scanf("%s %d", n, &b);
    for (int i = strlen(n) - 1; i >= 0; i--)
	{
        for (int j = 0; j < b; j++)
            if (n[i] == base[j])
                cur = j;
        total += cur * square(b, strlen(n) - (i + 1));
    }
	printf("%d\n", total);
    return (0);
}
