function solution(start, end) {
    return new Array(end-start+1).fill(0).map((e,i) => i+start);
}