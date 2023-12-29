#include <stdio.h>

void p_r(char *n)
{
    for (int i = 2; i >= 0; i--)
        printf("%c", n[i]);
    return ;
}

int main(void)
{
    char n1[4], n2[4];
    
    scanf("%s %s", n1, n2);
    for (int i = 2; i >= 0; i--)
    {
        if (n1[i] == n2[i])
            continue;
        else if (n1[i] > n2[i])
            p_r(n1);
        else
            p_r(n2);
        break ;
    }
    return (0);
}