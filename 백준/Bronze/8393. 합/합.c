#include <stdio.h>

int main(void)
{
    int max, total = 0;
    
    scanf("%d", &max);
    for(int i = 1; i <= max; i++)
        total += i;
    printf("%d", total);
    return (0);
}