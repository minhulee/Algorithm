#include <stdio.h>
#include <string.h>

int main(void)
{
    char ox[80];
    int t, total, score = 0;
    
	scanf("%d", &t);
	for (int j = 0; j < t; j++)
	{
		total = 0;
		score = 0;
		scanf("%s", ox);
		for (int i = 0; i < strlen(ox); i++)
    	{
			if (ox[i] == 'O')
			{
				score++;
				total += score;
			}
			else
				score = 0;
    	}
		printf("%d\n", total);
	}
    return (0);
}