#include <stdio.h>

int main(void)
{
    int a, b, max, min;
    
    scanf("%d %d", &a, &b);
	if (a > b)
		max = a, min = b;
	else
		max = b, min = a;
    for (int i = max; i > 0; i--)
	{
		if (max % i == 0 && min % i == 0)
		{
			printf("%d", i);
			break ;
		}
	}
	for (int i = 1; i != 0; i++)
	{
		if ((min * i) % max == 0)
		{
			printf(" %d", min * i);
			break ;
		}
	}
    return (0);
}