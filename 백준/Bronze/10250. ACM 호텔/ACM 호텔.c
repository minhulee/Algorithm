#include <stdio.h>

int main(void)
{
    int t, h, w, guest, res[2];
    
    scanf("%d", &t);
    for (int i = 0; i < t; i++)
    {
		scanf("%d %d %d", &h, &w, &guest);
		res[0] = 1;
		res[1] = 1;
        for (int j = 1; j < guest; j++)
        {
            if (res[0] < h)
                res[0]++;
            else
            {
                res[0] = 1;
                res[1]++;
            }
       }   
	   printf("%d%s%d\n",res[0], res[1] < 10 ? "0" : "", res[1]);
    }
    return (0);
}