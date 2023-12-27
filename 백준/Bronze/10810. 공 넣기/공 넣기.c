#include <stdio.h>

int main(void)
{
    int basket[100] = { 0 }, n, m;
    int start, end, ball;
    
    scanf("%d %d", &n, &m);
    for (int i = 0; i < m; i++)
    {
        scanf("%d %d %d", &start, &end, &ball);
        for (int j = start - 1; j < end; j++)
            basket[j] = ball;
    }
    for (int i = 0; i < n; i++)
        printf("%d ", basket[i]);
}