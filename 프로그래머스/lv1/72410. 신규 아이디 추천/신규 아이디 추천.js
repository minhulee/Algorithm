function solution(new_id) {
    const re = /[a-z]|[0-9]|\-|\_|\./;
    
    new_id = new_id.toLowerCase();
    new_id = new_id.split('').filter(c => re.test(c)).join('');
    
    while(new_id.includes('..')) {
        new_id = new_id.replace('..', '.');
    }
    
    new_id = new_id.split('').filter((c, i) => {
        if(i === 0 && c === ".") return false;
        if(i === new_id.length - 1 & c === ".") return false;
        return true;
    }).join('');
    
    if(new_id.length === 0) new_id += 'a';
    if(new_id.length >= 16) new_id = new_id.slice(0, 15);
    if(new_id[new_id.length - 1] === '.') new_id = new_id.slice(0, -1);
    
    while(new_id.length <= 2) new_id += new_id[new_id.length - 1];
    
    return new_id;
}