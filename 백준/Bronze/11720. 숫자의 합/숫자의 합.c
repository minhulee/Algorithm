#include <stdio.h>

int main(void)
{
    int t, total = 0;
	char cursor = 0;
    
    scanf("%d\n", &t);
    for (int i = 0; i < t; i++)
    {
        scanf("%c", &cursor);
		total += cursor - 48;
    }
    printf("%d", total);
    return (0);
}