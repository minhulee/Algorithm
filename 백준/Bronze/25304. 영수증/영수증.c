#include <stdio.h>

int main(void)
{
    int total, n, price, ea;
    
    scanf("%d", &total);
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        scanf("%d %d", &price, &ea);
        total -= price * ea;
    }
    printf(total == 0 ? "Yes" : "No");
    return (0);
}