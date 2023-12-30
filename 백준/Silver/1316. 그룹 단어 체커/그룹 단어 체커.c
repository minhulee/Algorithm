#include <stdio.h>
#include <string.h>
#define  FALSE -1
#define  TRUE 1

void reset(char *s)
{
    for (int i = 0; i < 52; i++)
        s[i] = '\0';
    return ;
}

int search(char *s, char c)
{
    for (int i = 0; i < 52; i++)
        if (s[i] == c)
            return (FALSE);
        else if (s[i] == '\0')
            return (i);
    return (TRUE);
}

int main(void)
{
    char word[100], map[52];
    char c;
    int n, total = 0, flag;
    
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        scanf("%s", word);
        reset(map);
		c = '\0';
		flag = 1;
        for (int j = 0; j < strlen(word); j++)
        {
            if (!c)
                c = word[j];
            if (c == word[j + 1]) // aabbcc
				continue ;
			else if (search(map, c) != -1)
			{
				map[search(map, c)] = c;
				c = '\0';
			}
			else
			{
				flag = 0;
				break ;
			}
        }
        total += flag ? 1 : 0;
    }
	printf("%d", total);
    return (0);
}