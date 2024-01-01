#include <stdio.h>

int main(void)
{
    int n, k;
    
    scanf("%d %d", &n, &k);
    for (int i = 1; i <= n && k > 0; i++)
    {
        if (n % i == 0)
            k--;
        if (k == 0)
            printf("%d", i);
    }
    if (k > 0)
        printf("0");
    return (0);
}