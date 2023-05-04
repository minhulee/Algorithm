function solution(dartResult) {
    let score = [];
    let cal = 0;
    
    for(let i = 0; i < dartResult.length; i++) {
        const c = dartResult[i];
        
        if(c === '1' && dartResult[i+1] === '0') {
            cal = 10;
            i++;
        } else if(c >= 0 && c <= 9) cal = dartResult[i];
        else if(c === 'S') score.push(cal**1);
        else if(c === 'D') score.push(cal**2);
        else if(c === 'T') score.push(cal**3);
        else if(c === '*') {
            score[score.length-1] *= 2;
            score[score.length-2] *= 2;
        } else if(c === '#') score[score.length-1] *= -1;
    }

    return score.reduce((a,c) => a+c);
}