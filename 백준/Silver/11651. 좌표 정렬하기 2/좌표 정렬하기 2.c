#include <stdio.h>
#include <stdlib.h>

int	comp(const void *a, const void *b)
{
	int *a_xy = (int *)a;
	int *b_xy = (int *)b;

	if (a_xy[1] == b_xy[1])
		return a_xy[0] - b_xy[0];
	else
		return a_xy[1] - b_xy[1];
}

int main(void)
{
	int N;

	scanf("%d", &N);

	int coor[N][2];

	for (int i = 0; i < N; i++)
		scanf("%d %d", &(coor[i][0]), &(coor[i][1]));

	qsort(coor, N, sizeof(coor) / N, comp);

	for (int i = 0; i < N; i++)
		printf("%d %d\n", coor[i][0], coor[i][1]);

	return (0);
}