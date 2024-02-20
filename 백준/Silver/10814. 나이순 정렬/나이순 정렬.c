#include <stdio.h>

int comp(const void *arg1, const void *arg2)
{
	int *a = (int *)arg1;
	int *b = (int *)arg2;
    
	if (a[1] > b[1])
        return 1;
	else if (a[1] < b[1]) 
        return -1;
	else
        return 0; 
}

int main(void)
{
	int N;

	scanf("%d", &N);
	int		idx[N][2];
	char	s[N][101];

	for (int i = 0; i < N; i++)
	{
		scanf("%d %s", &(idx[i][1]), s[i]);
		idx[i][0] = i;
	}
	
	qsort(idx, N, sizeof(idx) / N, comp);

	for (int i = 0; i < N; i++)
		printf("%d %s\n", idx[i][1], s[(idx[i][0])]);
}