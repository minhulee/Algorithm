#include <string>
#include <vector>

using namespace std;

int solution(vector<vector<int>> board, int k) {
    int answer = 0;
    for (int i = 0; board.begin() + i != board.end(); i++)
    {
        for (int j = 0; (i + j <= k) && (board[i].begin() + j != board[i].end()); j++)
             answer += board[i][j];
    }
    return answer;
}