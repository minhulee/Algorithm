function solution(keymap, targets) {
    return targets.map((e, i) => {
        let t = 0;
        
        e.split('').forEach((c, i) => {
            if(t < 0) return;
            
            let minimum = keymap[0].indexOf(c);
            
            for(let i = 1; i < keymap.length; i++) {
                const t = keymap[i].indexOf(c);
                
                if(minimum === -1 && t !== -1) minimum = t;
                if(minimum > t && t !== -1) minimum = t;
            }
            
            if(minimum !== -1) t += (minimum+1);
            else t = -1;
        })
        
        return t === 0 ? -1 : t;
    })
}