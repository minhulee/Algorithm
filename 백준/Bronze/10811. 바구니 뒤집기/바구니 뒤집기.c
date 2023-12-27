#include <stdio.h>

void swap(int *a, int *b)
{
	int tmp = *a;
	*a = *b;
	*b = tmp;
}

int main(void)
{
	int basket[100], n, m;
	int start, end;

	scanf("%d %d", &n, &m);
	for (int i = 0; i < n; i++)
		basket[i] = i + 1;
	for (int i = 0; i < m; i++)
	{
		scanf("%d %d", &start, &end);
		for (int i = 0; i <= (end - start) / 2; i++)
			swap(&(basket[(start - 1) + i]), &(basket[(end - 1) - i]));
	}
	for (int i = 0; i < n; i++)
		printf("%d ", basket[i]);
	return (0);
}