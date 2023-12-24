#include <stdio.h>

int main(void)
{
    int  ary[100], n, v, res = 0;

	scanf("%d", &n);
	for (int i = 0; i < n; i++)
		scanf("%d", &ary[i]);
	scanf("%d", &v);
	for (int i = 0; i < n; i++)
		if (ary[i] == v)
			res++;
	printf("%d", res);
}