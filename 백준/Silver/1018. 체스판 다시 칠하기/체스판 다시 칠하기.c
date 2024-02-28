#include <stdio.h>

// Calculate how many strokes you need to paint on the board.
int	paintBoard(char board[50][51], int x, int y)
{
	int	temp_w = 0, temp_b = 0;

	// First color is white.
	for (int i = x; i < x + 8; i++) 
	{
		for (int j = y; j < y + 8; j++) 
		{
			if (((i - x + j - y) % 2) == 0)
			{
				if (board[i][j] != 'W')
					temp_w++;
			}
			else
			{
				if (board[i][j] != 'B')
					temp_w++;
			}
		}
	}
	
	// fFrst color is black.
	for (int i = x; i < x + 8; i++)
	{
		for (int j = y; j < y + 8; j++)
		{
			if (((i - x + j - y) % 2) == 0)
			{
				if (board[i][j] != 'B')
					temp_b++;
			}
			else
			{
				if (board[i][j] != 'W')
					temp_b++;
			}
		}
	}

	return (temp_w < temp_b ? temp_w : temp_b);
}

int main(void)
{
	char board[50][51];
	int N, M, min = 9999, cur = 0;

	// input board size.
	scanf("%d%d", &N, &M);

	// insert color in board.
	for (int i = 0; i < N; i++)
		scanf("%s", board[i]);

	// select 8 x 8 from board.
	for (int x = 0; x < N - 7; x++)
	{
		for (int y = 0; y < M - 7; y++)
		{
			cur = paintBoard(board, x, y);
			min = cur < min ? cur : min;
        }
    }

    printf("%d", min);

    return (0);
}