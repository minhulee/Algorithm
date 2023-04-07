function solution(array, n) {
    // 배열을 요소와 n과 요소간의 차로 변형한다.
    array = array.map(el => [el, Math.abs(el - n)]);
    
    //동일한 차의 수가 존재할 경우 가장 작은 수를 구한다.
    const min = Math.min(...array.map(el => el[1]))
    return array.filter(el => el[1] === min).sort((a, b) => a[0] - b[0])[0][0];
}