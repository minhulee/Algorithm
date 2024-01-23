#include<stdio.h>

int main(){
	int t, num, ary[10001] = {0, };
	scanf("%d", &t);
	
	for(int i = 0; i < t; i ++)
	{
		scanf("%d", &num);
		ary[num] = ary[num] + 1;
	}
	for(int i = 1; i < 10001; i++)
	{
		for(int j = 1; j <= ary[i]; j++)
		{
			printf("%d\n", i);
		}
	}
	return (0);
}