#include <stdio.h>

int main(void)
{
    char    s[100] = { 0 };
    char    *alpha = "abcdefghijklmnopqrstuvwxyz";
    int     i;
    
    scanf("%s", s);
    while (*alpha)
    {
        i = 0;
        while (*(s + i))
        {
            if (*alpha == *(s + i))
                break;
            i++;
        }
        if (*alpha != *(s + i))
            printf("%d ", -1);
        else
            printf("%d ", i);
        alpha++;
    }
}