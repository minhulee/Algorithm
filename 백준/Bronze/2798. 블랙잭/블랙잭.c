#include <stdio.h>

int main(void)
{
    int t, jack, numb[100], result = 0, cur = 0;
    
    scanf("%d %d", &t, &jack);

	for (int i = 0; i < t; i++)
		scanf("%d", &numb[i]);

    for (int i = 0; i < t; i++)
	{
        for (int j = i + 1; j < t; j++)
		{
            for (int k = j + 1; k < t; k++)
			{
				cur = numb[i] + numb[j] + numb[k];
                if (cur > result && cur <= jack)
					result = cur;
			}
		}
	}
    printf("%d", result);
    return (0);
}