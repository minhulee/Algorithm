#include <stdio.h>

double credit(char *s)
{
    double score = 0.0;
    
    if (s[0] == 'A')
        score += 4;
    else if (s[0] == 'B')
        score += 3;
    else if (s[0] == 'C')
        score += 2;
    else if (s[0] == 'D')
        score += 1;
    if (s[1] == '+')
        score += 0.5;
    return (score);
}

int main(void)
{
    char subject[51], score[3];
    double total = 0.0, tgrade = 0.0, grade;
    
    for (int i = 0; i < 20; i++)
    {
		scanf("%s %lf %s\n", subject, &grade, score);
		if (score[0] == 'P')
			continue ;
        total += grade * credit(score);
        tgrade += grade;
    }
    printf("%lf", total / tgrade);
    return (0);
}