#include <stdio.h>
#define  hour 60
#define  day  24

int main(void)
{
    int h, m, t;
    
    scanf("%d %d", &h, &m);
    scanf("%d", &t); 
    m += t;
    if (m >= hour)
        h += m / hour;
    if (h >= day)
        h -= day;
    printf("%d %d", h, m % hour);
    return (0);
}