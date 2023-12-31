#include <stdio.h>

int main(void)
{
    int n, point = 4, l = 1;
    
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {   
        point += 5;
        point += 4 * (2 * (l - 1));
        point += 3 * (l * l - (2 * (l - 1)) - 1);
		l *= 2;
    }
    printf("%d", point);
    return (0);
}