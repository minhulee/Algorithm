#include <stdio.h>

int main(void)
{
    int cur, max = 0, idx = 0;
    
    for (int i = 1; i < 10; i++)
    {
        scanf("%d", &cur);
        if (max < cur)
        {
            max = cur;
            idx = i;
        }
    }
    printf("%d\n%d", max, idx);
    return (0);
}