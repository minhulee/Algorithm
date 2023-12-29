#include <stdio.h>
#include <string.h>

int main(void) {
	char s[101];
	int total = 0, cur = 0;

	scanf("%s", s);
	while (cur < strlen(s))
	{
		if (s[cur] == 'c' && (s[cur + 1] == '=' || s[cur + 1] == '-'))
			cur++;
		else if (s[cur] == 'd')
		{
			if (s[cur + 1] == '-')
				cur++;
			else if ((s[cur + 1] == 'z' && s[cur + 2] == '='))
				cur += 2;
		}
		else if (s[cur] == 'l' && s[cur + 1] == 'j')
			cur++;
		else if (s[cur] == 'n' && s[cur + 1] == 'j')
			cur++;
		else if (s[cur] == 's' && s[cur + 1] == '=')
			cur++;
		else if (s[cur] == 'z' && s[cur + 1] == '=')
			cur++;
		total++;
		cur++;
	}
	printf("%d", total);
	return (0);
}