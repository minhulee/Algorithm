#include <stdio.h>

int main(void)
{
    char c[101];
    int l = 0;
    scanf("%s", c);
    while (c[l])
		l++;
    printf("%d", l);
    return (0);
}