#include <string>
#include <vector>

using namespace std;

vector<vector<int>> solution(int n) {
    vector<vector<int>> answer;
    
    for (int i = 0; i < n; i++)
    {
        vector<int> layer;
        for (int j = 0; j < n; j++)
            layer.push_back(i == j);
        answer.push_back(layer);
    }
    return answer;
}