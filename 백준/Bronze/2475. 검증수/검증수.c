#include <stdio.h>

int main(void)
{
    int total = 0, cur;
    
    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &cur);
        total += cur * cur;
    }
    printf("%d", total % 10);
    return (0);
}