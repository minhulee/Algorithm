#include <stdio.h>

int main(void)
{
    int t, l;
    char c[1001];
    scanf("%d", &t);
    for (int i = 0; i < t; i++)
    {
        l = 0;
        scanf("%s", c);
        while (c[l])
            l++;
        printf("%c%c\n", c[0], c[l - 1]);
    }
    return (0);
}