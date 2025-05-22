function solution(arr) {
    // 정사각형의 길이 게산
    const w = Math.max(arr.length, ...arr.map(e => e.length));

    // 행 추가
    const padded = arr.map((e) => {
        return e.concat(new Array(w - e.length).fill(0))
    });

    // 열 추가 -> 각 요소가 참조되지 않도록 from()으로 생성
    const padRows = Array.from({ length: w - padded.length }, () => {
        return new Array(w).fill(0);
    });

    return padded.concat(padRows);
}
