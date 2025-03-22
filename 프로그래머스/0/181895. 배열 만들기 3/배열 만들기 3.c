#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int* solution(int arr[], size_t arr_len, int** intervals, size_t intervals_rows, size_t intervals_cols) {
    int *res = (int *)malloc(sizeof(int) * ((intervals[0][1] - intervals[0][0] + 1)
                                           + (intervals[1][1] - intervals[1][0] + 1)));
    int cursor = 0;
    for (int i = 0; i < 2; i++)
    {
        for (int j = intervals[i][0]; j <= intervals[i][1]; j++, cursor++)
            res[cursor] = arr[j];
    }
    return res;
}