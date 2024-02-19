#include <stdio.h>

int compare(int a[3], int b[3])
{
	if (a[0] < b[0] && a[1] < b[1])
		return (1);
	else
		return (0);
}

void rank(int ary[50][3], int len)
{
	int	rank;

	for (int i = 0; i < len; i++)
	{
		rank = 1;
		for (int j = 0; j < len; j++)
		{
			if (i == j)
				continue ;
			if (compare(ary[i], ary[j]))
				rank++;
		}
		ary[i][2] = rank;
	}
}

int main(void)
{
	int N, ary[50][3] = {0, };

	scanf("%d\n", &N);
	for (int i = 0; i < N; i++)
		scanf("%d %d", &ary[i][0], &ary[i][1]);
	rank(ary, N);
	for (int i = 0; i < N; i++)
		printf("%d ", ary[i][2]);
	return (0);
}