#include <stdio.h>

int main(void)
{
    int table;
    
    scanf("%d", &table);
    for (int i = 1; i < 10; i++)
        printf("%d * %d = %d\n", table, i, table * i);
    return (0);
}