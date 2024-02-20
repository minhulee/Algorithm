#include <stdio.h>
#include <stdlib.h>

typedef struct s_data
{
	int  age;
	char name[101];
} t_data;

int comp(const void *arg1, const void *arg2)
{
	t_data *a = (t_data *)arg1;
	t_data *b = (t_data *)arg2;
    
	if (a->age > b->age)
        return 1;
	else if (a->age < b->age) 
        return -1;
	else
        return 0; 
}

int main(void)
{
	int    N;
    t_data *datas;
    
	scanf("%d", &N);
    datas = (t_data *)malloc(sizeof(t_data) * N);
    
	for (int i = 0; i < N; i++)
		scanf("%d %s", &datas[i].age, datas[i].name);
    
	qsort(datas, N, sizeof(t_data), comp);
    
	for (int i = 0; i < N; i++)
		printf("%d %s\n", datas[i].age, datas[i].name);
    
	free(datas);
    
	return (0);
}