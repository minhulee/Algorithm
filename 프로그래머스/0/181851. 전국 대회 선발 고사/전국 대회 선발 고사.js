function solution(rank, attendance) {
    // array + index 보다는 obj + property를 통해서 코드 가독성 향상
    const attended = rank
        .map((rankValue, idx) => ({ rank: rankValue, index: idx }))
        .filter(({ index }) => attendance[index])
        .sort((a, b) => a.rank - b.rank);

    // idx를 통한 배열 요소 참조보다는 요소를 값복사 하여 사용
    const [first, second, third] = attended;
    return 10000 * first.index + 100 * second.index + third.index;
}
