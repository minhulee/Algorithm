#include <stdio.h>

int main(void)
{
    int t;
    
    scanf("%d", &t);
    for (int i = t - 1; i >= 0; i--)
    {
        for (int j = 1; j <= t; j++)
        {
            if (j <= i)
                printf(" ");
            else
                printf("*");
        }
        printf("\n");
    }
    return (0);
}