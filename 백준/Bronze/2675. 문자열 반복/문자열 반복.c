#include <stdio.h>

int main(void)
{
    int t, r, l;
    char cursor[21];
    
    scanf("%d\n", &t);
    for(int i = 0; i < t; i++)
    {
        scanf("%d ", &r);
        scanf("%s\n", cursor);
        l = 0;
        while(cursor[l])
        {
            for (int i = 0; i < r; i++)
                printf("%c", cursor[l]);
            l++;
        }
        printf("\n");
    }
    return (0);
}