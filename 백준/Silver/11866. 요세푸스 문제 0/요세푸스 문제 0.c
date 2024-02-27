#include <stdio.h>

int main(void)
{
	int N, K, printed = 0;

	scanf("%d %d", &N, &K);

	int numbs[N + 1], idx = K, add = K;

	for (int i = 0; i <= N; i++)
		numbs[i] = 0;

	printf("<");
	while (printed < N)
	{
		if (idx > N)
			idx = 1;
		if (numbs[idx])
			idx++;
		else
		{
			if (add == K)
			{
				printf("%d%s", idx, printed < N - 1 ? ", " : ">");
				numbs[idx] = 1;
				idx++;
				add = 1;
				printed++;
			}
			else
			{
				idx++;
				add++;
			}
		}
	}

	return (0);
}