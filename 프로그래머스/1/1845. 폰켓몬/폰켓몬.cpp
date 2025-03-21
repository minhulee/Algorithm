#include <vector>
#include <set>
using namespace std;

int solution(vector<int> nums)
{
    set<int> pSet(nums.begin(), nums.end());
    
    return (min(pSet.size(), nums.size() / 2));
}