function solution(s){
    return s.split("").reduce((acc, cur) => {
        if(cur === "p" || cur === "P") return acc += 1;
        else if(cur === "y" || cur === "Y") return acc -= 1;
        return acc;
    }, 0) === 0 ? true : false;
}