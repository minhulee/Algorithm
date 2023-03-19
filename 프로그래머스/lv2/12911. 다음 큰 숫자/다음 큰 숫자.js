function solution(n) {
    const search = (n) => `${n.toString(2)}`.split("").filter(el => el === "1").length - 1;
    const count = search(n);
    
    while(n++) {
        if(count === search(n)) return n;
    }
}