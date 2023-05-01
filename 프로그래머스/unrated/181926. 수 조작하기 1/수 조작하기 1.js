function solution(n, control) {
    // control.split('').forEach(e => {
    //     switch(e) {
    //         case "w" : n++; break;
    //         case "s" : n--; break;
    //         case "d" : n+=10; break;
    //         case "a" : n-=10; break;
    //     }
    // })
    
    for(let i = 0; i < control.length; i++) {
        switch(control[i]) {
            case "w" : n++; break;
            case "s" : n--; break;
            case "d" : n+=10; break;
            case "a" : n-=10; break;
        }
    }
    
    return n;
}