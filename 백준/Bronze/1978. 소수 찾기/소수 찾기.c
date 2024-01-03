#include <stdio.h>

int main(void)
{
    int n, cur, res = 0;
    
    scanf("%d\n", &n);
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &cur);
		if (cur == 2)
			res++;
        for (int j = 2; j < cur; j++)
        {
            if (cur % j == 0)
                break;
			if (j == cur - 1)
				res++;
        }
    }
    printf("%d", res);
    return (0);
}