#include <stdio.h>

int main(void)
{
    int n, m, ary1[100][100], ary2[100][100];
    
    scanf("%d %d", &n, &m);
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < n; j++)
        {
            for (int k = 0; k < m; k++)
            {
                if (i == 0)
                    scanf("%d", &ary1[j][k]);
                else if (i == 1)
                    scanf("%d", &ary2[j][k]);
                else if (i == 2)
                    printf("%d%c", ary1[j][k] + ary2[j][k], k < m - 1 ? ' ' : '\n');
            }
        }
    }
    return (0);
}