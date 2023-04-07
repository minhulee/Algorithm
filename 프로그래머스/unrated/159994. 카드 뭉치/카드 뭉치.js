function solution(cards1, cards2, goal) {
    let cur = 0;
    let select1 = 0;
    let select2 = 0;
    
    while(cur !== goal.length) {
        if(goal[cur] === cards1[select1]) select1++;
        else if(goal[cur] === cards2[select2]) select2++;
        else return "No";
        
        cur++
    }
    
    return "Yes";
}