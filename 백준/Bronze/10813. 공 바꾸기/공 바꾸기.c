#include <stdio.h>

void swap(int *a, int *b)
{
    int tmp;
    tmp = *a;
    *a = *b;
    *b = tmp;
}

int main(void)
{
    int basket[100], n, m;
    int a, b;
    
    scanf("%d %d", &n, &m);
    for (int i = 0; i < n; i++)
        basket[i] = i + 1;
	for (int i = 0; i < m; i++)
	{
		scanf("%d %d", &a, &b);
		swap(&(basket[a - 1]), &(basket[b - 1]));
	}
    for (int i = 0; i < n; i++)
        printf("%d ", basket[i]);
}