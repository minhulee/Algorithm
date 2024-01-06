#include <stdio.h>

int main(void)
{
    int max;
    
    scanf("%d", &max);
    for (int i = 1; i <= max; i++)
        printf("%d\n", i);
    return (0);
}