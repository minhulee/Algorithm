#include <stdio.h>
#include <string.h>

int main(void)
{
    char ary[5][16];

	for (int i = 0; i < 5; i++)
		scanf("%s", ary[i]);
	for (int i = 0; i < 15; i++)
	{
		for (int j = 0; j < 5; j++)
		{
			if (i < strlen(ary[j]))
				printf("%c", ary[j][i]);
		}
	}
    return (0);
}