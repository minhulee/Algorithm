function solution(picture, k) {
    // 문자열은 불변하므로 Array를 통해 생성된 배열이 동일한 문자열 resized를 참조해도 OK!
    return picture.flatMap(line => {
        const resized = [...line].map(c => c.repeat(k)).join('');
        return Array(k).fill(resized);
    });
}