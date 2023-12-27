#include <stdio.h>
#define  TRUE 1
#define  FALSE 0

int main(void)
{
    int devision[42] = { FALSE };
    int cursor, res = 0;
    
    for(int i = 0; i < 10; i++)
    {
        scanf("%d", &cursor);
        devision[cursor % 42] = TRUE;
    }
    for(int i = 0; i < 42; i++)
        res += devision[i];
    printf("%d", res);
    return (0);
}