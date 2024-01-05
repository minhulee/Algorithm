#include <stdio.h>

int main(void)
{
    int n, layer = 1, increase = 6, max = 7;
    
    scanf("%d", &n);
    while (max < n)
    {
        layer++;
        max += layer * increase;
    }
    printf("%d", n == 1 ? layer : layer + 1);
    return (0);
}