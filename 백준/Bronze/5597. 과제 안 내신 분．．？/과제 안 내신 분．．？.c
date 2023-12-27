#include <stdio.h>
#define  TRUE 1
#define  FALSE 0

int main(void)
{
    int student[30] = { FALSE };
    int cursor;
    
    for (int i = 0; i < 30; i++)
    {
        scanf("%d", &cursor);
        student[cursor - 1] = TRUE;
    }
    for (int i = 0; i < 30; i++)
        if (student[i] == FALSE)
            printf("%d\n", i + 1);
    return (0);
}