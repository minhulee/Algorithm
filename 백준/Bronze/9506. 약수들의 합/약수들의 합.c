#include <stdio.h>
#define  END -1

int main(void)
{
    int n, total = 0, max;
    
    while (scanf("%d", &n) != EOF)
    {
		if (n == END)
			return (0);
		total = 0;
        printf("%d ", n);
        for (int i = 1; i < n; i++)
            if (n % i == 0)
			{
                total += i;
				max = i;
			}
        printf("%s", total == n ? "=" : "is NOT perfect.\n");
        for (int i = 1; i < n && n == total; i++)
            if (n % i == 0)
                printf(" %d%s", i, i != max ? " +" : "\n");
    }
    return (0);
}