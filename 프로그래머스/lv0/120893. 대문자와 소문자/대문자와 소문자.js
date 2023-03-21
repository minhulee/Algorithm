function solution(my_string) {
    const filter = "abcdefghijklmnopqrstuvwxyz";
    
    return my_string.split('').map(el => {
        if(filter.includes(el)) return el.toUpperCase();
        else return el.toLowerCase();
    }).join("")
}