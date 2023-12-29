#include <stdio.h>

int main(void)
{
	char numb[15], *alpha = "ABC DEF GHI JKL MNO PQRS TUV WXYZ";
	int total = 0, ni = 0, cur, ai;

	scanf("%s", numb);
	while (numb[ni])
	{
		cur = 3;
		ai = 0;
		while (alpha[ai])
		{
			if (numb[ni] == alpha[ai])
				break ;
			if (alpha[ai] == ' ')
				cur++;
			ai++;
		}
		total += cur;
		ni++;
	}
	printf("%d", total);
	return (0);
}