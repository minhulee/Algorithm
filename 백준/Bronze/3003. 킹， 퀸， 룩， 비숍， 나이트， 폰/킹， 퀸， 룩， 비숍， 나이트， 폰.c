#include <stdio.h>

int main(void)
{
    int cur, full[6] = { 1, 1, 2, 2, 2, 8 }, i = 0;
    while (scanf("%d ", &cur) != EOF)
        printf("%d ", *(full + (i++)) - cur);
    return (0);
}
