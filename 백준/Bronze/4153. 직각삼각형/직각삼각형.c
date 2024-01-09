#include <stdio.h>

int main(void)
{
    long w, h, d, n1, n2, n3;
    
    while(scanf("%ld %ld %ld", &w, &h, &d) != EOF)
    {
        if (w == 0 && h == 0 && d == 0)
            break ;
        n1 = w*w, n2 = h*h, n3 = d*d;
        if(n1 + n2 == n3 || n1 + n3 == n2 || n2 + n3 == n1)
            printf("right\n");
        else 
            printf("wrong\n");
    }
    return (0);
}