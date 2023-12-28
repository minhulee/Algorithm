#include <stdio.h>

int main(void)
{
    char s[1000000];
    int c = 0;
    
    while (scanf("%s", s) > 0)
		c++;
    printf("%d", c);
    return (0);
}