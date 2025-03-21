#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

string solution(vector<string> p, vector<string> c) {
    unordered_map<string, int> pm;
    unordered_map<string, int> cm;
    
    for (const string &m : p)
        pm[m]++;
    
    for (const string &m : c)
        cm[m]++;
    
    for (const string &m : p)
        if (pm[m] > cm[m])
            return (m);
}