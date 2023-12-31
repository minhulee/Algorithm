#include <stdio.h>
#define  Quarter 25
#define  Dime    10
#define  Nickel  5
#define  Penny   1

void reset(int *ary)
{
	for (int i = 0; i < 4; i++)
		ary[i] = 0;
}

int main(void)
{
	int t, res[4] = {0,}, total;
    
    scanf("%d", &t);
    for (int i = 0; i < t; i++)
    {
        scanf("%d", &total);
		reset(res);
        while (total > 0)
        {
            if (total >= Quarter)
            {
                total -= Quarter;
                res[0]++;
            }
            else if (total >= Dime)
            {
                total -= Dime;
                res[1]++;
            }
            else if (total >= Nickel)
            {
                total -= Nickel;
                res[2]++;
            }
            else
            {
                total -= Penny;
                res[3]++;
            }
        }
        printf("%d %d %d %d\n", res[0], res[1], res[2], res[3]);
    }
	return (0);
}