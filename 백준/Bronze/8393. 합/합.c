#include <stdio.h>

int main(void)
{
    int max, total = 0;
    
    scanf("%d", &max);
    while (max > 0)
        total += max--;
    printf("%d", total);
    return (0);
}