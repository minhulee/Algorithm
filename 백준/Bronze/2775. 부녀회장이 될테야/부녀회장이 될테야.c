#include <stdio.h>

int main(void)
{
    int t, k, n, cur;
    int ary[15][14] = {{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14} };
    
    scanf("%d", &t);
    for (int i = 0; i < t; i++)
    {
        scanf("%d\n%d", &k, &n);
        for (int j = 1; j <= k; j++)
		{
			for (int k = 0; k < n; k++)
			{
				cur = 0;
				for (int l = 0; l <= k; l++)
					cur += ary[j - 1][l];
				ary[j][k] = cur;
			}
		}
		printf("%d\n", ary[k][n - 1]);
    }
    return (0);
}