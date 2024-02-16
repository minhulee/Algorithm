#include <stdio.h>

int main(void)
{
    int n, numb = 665, temp;
    
    scanf("%d", &n);
    while (n > 0)
    {
		numb++;
		temp = numb;
		while (temp > 0)
		{
			if (temp % 1000 == 666)
			{
				n--;
				break ;
			}
			else
				temp /= 10;
		}
    }
	printf("%d", numb);
    return (0);
}