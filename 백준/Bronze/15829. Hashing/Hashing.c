#include <stdio.h>
#define  MOD 1234567891

int main(){
	int t;
	long long result = 0, r = 1;
	char str[51];
	
	scanf("%d %s", &t, str);
	for (int i = 0; i < t; i++)
    {
		result = (result + (str[i] - 96) * r) % MOD;
		r = (r*31) % MOD;
	}
	printf("%lld", result);
}