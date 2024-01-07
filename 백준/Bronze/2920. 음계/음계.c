#include <stdio.h>

int main(void)
{
    int scale, start = 0, flag = 0;
    
    for (int i = 1; i < 9; i++)
    {
        scanf("%d", &scale);
		if (!start)
			start = scale;
        if (start == 1 && scale == i)
			continue ;
		if (start == 8 && scale == 9 - i)
			continue ;
		flag = 1;
		break ;
    }
    printf("%s", flag ? "mixed" : (start == 1 ? "ascending" : "descending"));
    return (0);
}