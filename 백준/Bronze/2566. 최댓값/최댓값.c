#include <stdio.h>

int main(void)
{
    int max = -1, n, m, cursor;
    
    for (int i = 1; i <= 9; i++)
    {
        for (int j = 1; j <= 9; j++)
        {
            scanf("%d", &cursor);
            if (max < cursor)
            {
                max = cursor;
                n = i;
                m = j;
            }
        }
    }
    printf("%d\n%d %d", max, n, m);
    return (0);
}