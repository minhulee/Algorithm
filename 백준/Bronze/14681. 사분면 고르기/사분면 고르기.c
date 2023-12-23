#include <stdio.h>

int main(void)
{
    int x, y;
    scanf("%d", &x);
    scanf("%d", &y);
    if (0 < x && 0 < y)
        printf("1");
    else if (0 < x && y < 0)
        printf("4");
    else if (x < 0 && y < 0)
        printf("3");
    else
        printf("2");
    return (0);
}