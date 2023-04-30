function solution(s, skip, index) {
    const f = Object.fromEntries(new Array(26).fill(0).map((e, i) => [i+97, String.fromCharCode(i+97)]));
    
    return s.split('').map((e, i) => {
        let n = e.charCodeAt(0);
        const queue = [];
        
        while(queue.length !== index) {
            if(!skip.includes(f[n+1])) {
                if(f[n+1]) {
                    queue.push(f[n+1]);
                    n++;   
                } else n = 96;
            } else n++;
        } 
        
        return queue[index-1];
    }).join('');
}