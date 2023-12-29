#include <stdio.h>
#define  alpha "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

int main(void)
{
    char c;
    int res[27] = { 0 }, max = 0, pre = -1;
    
    while (scanf("%c", &c) != EOF)
    {
		if (c >= 92)
			c -= 32;
        for (int i = 0; i < 27; i++)
            if (c == alpha[i])
                res[i] += 1;
    }
    for (int i = 1; i < 27; i++)
	{
        if (res[max] <= res[i])
        {
            pre = max;
			max = i;
        }
	}
	if (res[pre] != res[max])
		printf("%c", alpha[max]);
	else
		printf("?");
    return (0);
}