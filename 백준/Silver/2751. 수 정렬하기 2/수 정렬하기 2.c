#include<stdio.h>

int main(){
	int	ary[2000001] = { 0, }, t, cur;

	scanf("%d", &t);
	for (int i = 0; i < t; i++)
	{
		scanf("%d", &cur);
		ary[cur + 1000000]++;
	}
	for (int i = 0; t > 0; i++)
	{
		if (ary[i])
		{
			printf("%d\n", i - 1000000);
			t--;
		}
	}
}