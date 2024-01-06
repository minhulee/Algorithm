#include <stdio.h>

int main(void)
{
    char grade, add;
    float score = 0;
    
    scanf("%c%c", &grade, &add);
    if (grade == 'A')
        score += 4;
    if (grade == 'B')
        score += 3;
    if (grade == 'C')
        score += 2;
    if (grade == 'D')
        score += 1;
    if (add == '+' && grade != 'F')
        score += 0.3;
    if (add == '-' && grade != 'F')
        score -= 0.3;
    printf("%.1f", score);
    return (0);
}