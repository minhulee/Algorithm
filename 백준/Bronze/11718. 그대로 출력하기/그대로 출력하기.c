#include <stdio.h>

int main(void)
{
    char s[100 * 100] = "";
	int i = 0, res = 0;
    
    while ((res = scanf("%c", &s[i])) == 1)
		i++;
	s[i] = '\0';
	printf("%s", s);
    return (0);
}