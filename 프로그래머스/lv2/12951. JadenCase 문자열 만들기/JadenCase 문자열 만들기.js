function solution(s) {
    // return s.toLowerCase().split(" ").map(e => {
    //     return e[0].toUpperCase() + e.substring(1);
    // }).join(" ");
    
    return s.toLowerCase().split(" ").map((v)=> v.charAt(0).toUpperCase()+v.substring(1)).join(" ");
}