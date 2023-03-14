function solution(s) {
    return s.split(" ").map(el => {
        console.log(el);
        return `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}`;
    }).join(" ");
}