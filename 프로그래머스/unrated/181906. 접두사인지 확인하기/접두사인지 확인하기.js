function solution(my_string, is_prefix) {
    let isPrefix = false;
    
    for(let i = 1; i < my_string.length; i++) {
        if(my_string.slice(0, i) === is_prefix) isPrefix = true;
    }
    
    return isPrefix ? 1 : 0;
}