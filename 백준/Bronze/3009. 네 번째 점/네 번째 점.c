#include <stdio.h>

int main(void)
{
    int a[2], b[2], c[2];
    
    scanf("%d %d\n", &a[0], &a[1]);
    scanf("%d %d\n", &b[0], &b[1]);
    scanf("%d %d", &c[0], &c[1]);
    printf("%d ", a[0] == b[0] ? c[0] : (b[0] == c[0] ? a[0] : b[0]));
	printf("%d", a[1] == b[1] ? c[1] : (b[1] == c[1] ? a[1] : b[1]));
}