#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int x, y, w, h, res = 1000;
    
    scanf("%d %d %d %d", &x, &y, &w, &h);
    if (res > x)
        res = x;
    if (res > y)
        res = y;
    if (res > abs(w - x))
        res = abs(w - x);
    if (res > abs(h - y))
        res = abs(h - y);
    printf("%d", res);
    return (0);
}