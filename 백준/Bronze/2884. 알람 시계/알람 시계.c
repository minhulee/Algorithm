#include <stdio.h>
#define  hour 60
#define  save 45

int main(void)
{
    int h, m;
    scanf("%d %d", &h, &m);
    if (m >= save)
        printf("%d %d", h, m - save);
    else
    {
        if (h == 0)
            h = 24;
        printf("%d %d", h - 1, (m + hour) - save);
    }
    return (0);
}