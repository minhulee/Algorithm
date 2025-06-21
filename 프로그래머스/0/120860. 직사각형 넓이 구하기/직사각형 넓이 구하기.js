function solution(dots) {
    // 최대, 최소 탐색을 쉽게하기 위해 x, y 좌표를 분리
    const arrX = dots.map(([x, y]) => x);
    const arrY = dots.map(([x, y]) => y);
    
    // 축과 평행한 직사각형이므로, 최대 - 최소의 차로 w, h 탐색
    const w = Math.max(...arrX) - Math.min(...arrX);
    const h = Math.max(...arrY) - Math.min(...arrY);
    
    return w * h;
}