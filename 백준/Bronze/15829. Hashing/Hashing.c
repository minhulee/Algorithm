#include <stdio.h>

int	square(int n)
{
	int res = 1, base = 31;
	for (int i = 0; i < n; i++)
		res *= base;
	return (res);
}

int main(void)
{
    int t, total = 0;
    scanf("%d", &t);
    
    char s[t];
    scanf("%s", s);
    
    for (int i = 0; i < t; i++)
        total += (s[i] - 96) * square(i);
    printf("%d", total);
    return (0);
}