#include <stdio.h>

int main(void)
{
	int	a, b, tmp;
	int	filter = 100;
	int	result[3];
	
	scanf("%d", &a);
	scanf("%d", &b);
	tmp = b;
	for (int i = 0; i < 3; i++)
	{
		result[i] = b / filter;
		b %= filter;
		filter /= 10;
	}
	for (int i = 2; i >= 0; i--)
		printf("%d\n", a * result[i]);
	printf("%d", a * tmp);
	return (0);
}