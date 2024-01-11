#include <stdio.h>

int main(void)
{
    int n, m, cur;
    
    scanf("%d", &n);
    for (int i = 1; i < n; i++)
    {
        m = i;
        cur = i;
        
        while (cur > 0)
        {
            m += cur % 10;
            cur /= 10;
        }
        
        if (m == n)
        {    
            printf("%d", i);
            return (0);
        }
    }
    printf("0");
    return (0);
}