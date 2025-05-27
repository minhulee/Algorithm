function solution(picture, k) {
    const resized = picture.map((e) => {
        return e.split('').map((e) => {
            return e.repeat(k);
        }).join('');
    }).flatMap((e) => Array(k).fill(e));
    return resized;
}