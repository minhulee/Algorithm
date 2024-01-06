#include <stdio.h>

int main(void)
{
    char s[101];
	int i = -1;
    
    scanf("%s", s);
    while (s[++i])
        s[i] += (65 <= s[i] && s[i] <= 90) ? 32 : -32;
    printf("%s", s);
    return (0);
}