#include <stdio.h>

int main(void)
{
    int a, b;
    
    while (scanf("%d %d", &a, &b) != EOF)
    {
        if (!a || !b)
            continue ;
        printf("%s\n", (b % a == 0 || a % b == 0) ? (b > a ? "factor" : "multiple") : "neither" );
    }
    return (0);
}