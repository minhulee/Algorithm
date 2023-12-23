#include <stdio.h>
#define  EOF -1

int main(void)
{
    int a, b;
    
    while (scanf("%d %d", &a, &b) != EOF)
        printf("%d\n", a + b);
    return (0);
}