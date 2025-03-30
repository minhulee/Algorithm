function solution(myString, pat) {
    let idx = myString.lastIndexOf(pat);
    return myString.substr(0, idx == -1 ? idx : idx + pat.length);
}