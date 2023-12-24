#include <stdio.h>

int main(void)
{
    int n, x, ary[10000] = { 0 }, c;
    int idx = 0;
    
    scanf("%d %d", &n, &x);
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &c);
        if (c < x)
        {
            ary[idx] = c;
            idx++;
        }
    }
    for (int i = 0; i < idx; i++)
        printf("%d ", ary[i]);
}