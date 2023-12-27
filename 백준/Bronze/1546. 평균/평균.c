#include <stdio.h>

int main(void)
{
	float res = 0, score[1000];
	int n, max = 0;

	scanf("%d", &n);
	for (int i = 0; i < n; i++)
	{
		scanf("%f", &(score[i]));
		if (max < score[i])
			max = score[i];
		
	}
	for (int i = 0; i < n; i++)
		res += ((score[i] / max) * 100);
	printf("%f", res / n);
}