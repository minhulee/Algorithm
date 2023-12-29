#include <stdio.h>

int main(void)
{
    int l = 0;
    char s[101];
    
    scanf("%s", s);
    while (s[l])
        l++;
    for (int i = 0; i < l / 2; i++)
    {
        if (s[i] != s[l - i - 1])
        {
            printf("0");
            return (0);
        }
    }
    printf("1");
    return (0);
}