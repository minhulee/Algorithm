#include <stdio.h>

int main(void)
{
    int t, square[100][100] = {0, }, w, h;
    
	scanf("%d", &t);
    for (int i = 0; i < t; i++)
    {
        scanf("%d %d", &w, &h);
        for (int i = h; i < h + 10; i++)
            for (int j = w; j < w + 10; j++)
                if (!square[i][j])
                    square[i][j] = 1;
    }
    t = 0;
    for (int i = 0; i < 100; i++)
        for (int j = 0; j < 100; j++)
            t += square[i][j];
    printf("%d", t);
    return (0);
}