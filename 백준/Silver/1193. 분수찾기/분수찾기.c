#include <stdio.h>

int main(void)
{
    int x, numer = 1, denom = 1, max = 1, flag = 1;
    
    scanf("%d", &x);
    for (int i = 0; i < x - 1; i++)
	{
        if ((numer == max && !flag) || (denom == max && flag))
        {
			max++;
			if (flag)
			{
				numer = 1;
				denom = max;
			}
			else
			{
				numer = max;
				denom = 1;
			}
			flag = !flag;
			continue ;
        }
		if (!flag)
		{
			numer++;
			denom--;
		}
		else
		{
			numer--;
			denom++;	
		}
    }
    printf("%d/%d", numer, denom);
    return (0);
}