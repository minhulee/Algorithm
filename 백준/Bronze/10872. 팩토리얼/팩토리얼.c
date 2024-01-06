#include <stdio.h>

int main(void)
{
    int max, res = 1;
    
    scanf("%d", &max);
    for (int i = 1; i < max; i++)
        res *= i + 1;
	printf("%d", res);
    return (0);
}