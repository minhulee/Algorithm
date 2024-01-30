#include <stdio.h>
#include <stdlib.h> 
#include <string.h>

int compare(const void* arg1, const void* arg2) 
{
	size_t	len1 = strlen((const char*)arg1);
	size_t	len2 = strlen((const char*)arg2);

	if (len1 > len2)
		return (1);
	else if (len1 < len2)
		return (-1);
	else
		return (strcmp((char*)arg1, (char*)arg2));
}

int main(void)
{    
	int row;
	char arr[20000][51] = { 0 };

	scanf("%d", &row);
	for (int i = 0; i < row; i++)      
		scanf("%s", arr[i]);

	qsort(arr, row, 51, compare);
	
	for (int i = 0; i < row; i++) {
		if (strcmp(arr[i], arr[i + 1]) != 0)
			printf("%s\n", arr[i]);
	}
	return 0;
}