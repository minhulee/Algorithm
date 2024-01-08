#include <stdio.h>
#include <string.h>

int main(void)
{
    char s[6];
    int len, flag;
    
	while (scanf("%s", s) != EOF && s[0] != '0') 
    {
        len = strlen(s);
        flag = 1;
        for (int i = 0; i < len / 2; i++)
        {
            if (s[i] != s[len - 1 - i])
            {
                flag = 0;
                break ;
            }
        }
        printf("%s\n", flag ? "yes" : "no");
	}
    return (0);
}