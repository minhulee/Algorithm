function solution(s){
    let countP = 0;
    let countY = 0;
    
    for(let el of s) {
        if(el === "p" || el === "P") countP++;
        if(el === "y" || el === "Y") countY++;
    }
    
    // if(countP === 0 && countY === 0) return true;
    return countP === countY ? true : false;
}