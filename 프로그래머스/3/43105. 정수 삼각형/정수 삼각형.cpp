#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

int siuu(vector<vector<int> >::iterator start, vector<vector<int> >::iterator end) {
    if (start == end)
        return (*max_element(start->begin(), start->end()));

    *((start + 1)->begin()) += *(start->begin());
    *((start + 1)->end() - 1) += *(start->end() - 1);

    for (auto it = start->begin(), next = (start + 1)->begin() + 1; next < (start + 1)->end() - 1; it++, next++) {
        *next += max(*it, *(it + 1));
    }

    return siuu(start + 1, end);
}

int solution(vector<vector<int>> t) {
    return (siuu(t.begin(), t.end() - 1));
}
