function solution(name, yearning, photo) {
    return photo.map(li => li.reduce((acc, cur) => {
        const idx = name.indexOf(cur);
        if(idx > -1) return acc + yearning[idx];
        else return acc;
    }, 0))
}