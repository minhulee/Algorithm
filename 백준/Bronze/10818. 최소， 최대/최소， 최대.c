#include <stdio.h>

int main(void)
{
    int t, max = -1000000, min = 1000000, cursor;
    
    scanf("%d", &t);
    for (int i = 0; i < t; i++)
	{
		scanf("%d", &cursor);
		if (max < cursor)
			max = cursor;
		if (min > cursor)
			min = cursor;
	}
    printf("%d %d", min, max);
	return (0);
}